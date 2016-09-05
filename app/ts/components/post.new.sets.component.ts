import { Component, OnInit } from '@angular/core';
import {PostListDTO} from './../objects/dtos/postListDTO';
import {PostService} from './../services/post.service';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {WindowSize} from './../services/core/window.size';



@Component({
    selector: 'sets-new',
    templateUrl: 'app/ts/templates/post.new.component.html',
    providers: [PostService, ElasticClient, YFPostHandler,WindowSize],
    directives: [ ROUTER_DIRECTIVES],
    inputs: ['posts']
})

export class NewSetsComponent implements OnInit {
    private isMoreOrShowAll:boolean = true;
    public route: string = 'sets';
    public title:string = 'Новые фотографии зарубежных моделей';
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
        this.sub = this.postService.getYFSetsNew(0, size).subscribe(data => {
            this.postListDTO = this.postService.postToPostListDTO(data);
        });
    }

    loadMore(){
        this.postService.loadMoreSets(this.postListDTO.length, this.loadMoreTo).subscribe(data => {
            this.postListDTO = this.postListDTO.concat(this.postService.postToPostListDTO(data));
        });
        this.isMoreOrShowAll = false;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }




}