import { Component, OnInit } from '@angular/core';
import {PostListDTO} from './../objects/dtos/postListDTO';
import {PostService} from './../services/post.service';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {WindowSize} from './../services/core/window.size';
import {MessageConfig} from './../config/message.properties';
import {SetupConfig} from './../config/setup.config';



@Component({
    selector: 'native-new',
    templateUrl: 'app/ts/templates/post.new.component.html',
    providers: [PostService, ElasticClient, YFPostHandler, WindowSize],
    directives: [ ROUTER_DIRECTIVES],
    inputs: ['posts']
})

export class NewNativeComponent implements OnInit {
    private isMoreOrShowAll:boolean = true;
    public title:string = MessageConfig.NEW_NATIVE_TITLE;
    public show_all_pics = MessageConfig.SHOW_ALL_PICS;
    public route: string = SetupConfig.NATIVE_LIST_ROUTE;
    public single_route = SetupConfig.SINGLE_POST_ROUTE;
    private sub:any;
    private loadMoreTo:number;
    private postListDTO:PostListDTO[];



    constructor(private postService: PostService, private windowSize:WindowSize){}

    ngOnInit() {
        this.windowSize.width$.subscribe(width => {
            if(width < 768){
                this.getPosts(4);
                this.loadMoreTo = 8;
            } else if(width < 992){
                this.getPosts(3);
                this.loadMoreTo = 6;
            } else {
                this.getPosts(4);
                this.loadMoreTo = 8;
            }
        });
    }

    private getPosts(size:number){
        this.sub = this.postService.getYFNativeNew(0, size).subscribe(data => {
            this.postListDTO = this.postService.postToPostListDTO(data);
        });
    }

    loadMore(){
        this.postService.loadMoreNative(this.postListDTO.length,  this.loadMoreTo).subscribe(data => {
            this.postListDTO = this.postListDTO.concat(this.postService.postToPostListDTO(data));
        });
        this.isMoreOrShowAll = false;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}