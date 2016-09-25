import { Component, OnInit } from '@angular/core';
import {PostListDTO} from './../../objects/dtos/postListDTO';
import {PostService} from './../../services/post.service';
import {ElasticClient} from './../../services/http/elastic.client.service';
import {YFPostHandler} from './../../services/handlers/yf.post.handlers';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import {WindowSize} from './../../services/core/window.size';
import { Title }     from '@angular/platform-browser';
import {MessageConfig} from './../../config/message.properties';
import {SetupConfig} from './../../config/setup.config';



@Component({
    selector: 'native-list',
    templateUrl: 'app/ts/templates/lists/lists.component.html',
    providers: [PostService, ElasticClient, YFPostHandler, WindowSize, Title],
    directives: [ ROUTER_DIRECTIVES]
})

export class NativeListComponent implements OnInit {
    private postListDTO:PostListDTO[];
    private postsLength: number;
    private subParams:any;
    private subNewPosts:any;
    private page:number;
    public size:number;
    public tag: string = SetupConfig.NATIVE_LIST_ROUTE;
    public show_all_pics = MessageConfig.SHOW_ALL_PICS;
    public single_route = SetupConfig.SINGLE_POST_ROUTE;

    constructor(private postService: PostService, private route: ActivatedRoute, private windowSize:WindowSize, private titleService: Title){
        this.setTitle(MessageConfig.NATIVE_LIST_TITLE)
    }

    ngOnInit() {
        this.windowSize.width$.subscribe(width => {
            if(width < 768){
                this.size = 20;
                this.getPosts(this.size);
            } else if(width < 992){
                this.size = 15;
                this.getPosts(this.size);
            } else {
                this.size = 20;
                this.getPosts(this.size);
            }
        });
    }

    private getPosts(size:number) {
        this.subParams = this.route.params.subscribe(params => {
            if(params['page']){
                this.page = parseInt(params['page']);
            } else {
                this.page = 1;
            }
            let from = ( this.page-1) * size;
            this.subNewPosts = this.postService.getYFNativeNew(from, size).subscribe(data => {
                this.postListDTO = this.postService.postToPostListDTO(data);
                this.postsLength = this.postListDTO.length;
            });

        });
    }

        ngOnDestroy() {
        this.subParams.unsubscribe();
        this.subNewPosts.unsubscribe();

    }

    public setTitle(title:string) {
        this.titleService.setTitle(title);
    }

    public scrollToTop(){
        window.scrollTo(0, 0);
    }


}