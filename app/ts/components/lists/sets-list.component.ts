import { Component, OnInit } from '@angular/core';
import {PostListDTO} from './../../objects/dtos/postListDTO';
import {PostService} from './../../services/post.service';
import {ElasticClient} from './../../services/http/elastic.client.service';
import {YFPostHandler} from './../../services/handlers/yf.post.handlers';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import {WindowSize} from './../../services/core/window.size';



@Component({
    selector: 'native-list',
    templateUrl: 'app/ts/templates/lists/lists.component.html',
    providers: [PostService, ElasticClient, YFPostHandler, WindowSize],
    directives: [ ROUTER_DIRECTIVES]
})

export class SetsListComponent implements OnInit {
    private postListDTO:PostListDTO[];
    private postsLength: number;
    private sub:any;
    private page:number;
    public size:number;
    public tag: string = 'sets';


    constructor(private postService: PostService, private route: ActivatedRoute, private windowSize:WindowSize){}

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

    private getPosts(size:number){
        this.sub = this.route.params.subscribe(params => {
            if(params['page']){
                this.page = parseInt(params['page']);
            } else {
                this.page = 1;
            }
            let from = ( this.page-1) * size;
            this.sub = this.postService.getYFSetsNew(from, size).subscribe(data => {
                this.postListDTO = this.postService.postToPostListDTO(data);
                this.postsLength = this.postListDTO.length;
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }




}