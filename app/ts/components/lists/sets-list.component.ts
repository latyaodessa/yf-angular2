import { Component, OnInit } from '@angular/core';
import {PostListDTO} from './../../objects/dtos/postListDTO';
import {PostService} from './../../services/post.service';
import {ElasticClient} from './../../services/http/elastic.client.service';
import {YFPostHandler} from './../../services/handlers/yf.post.handlers';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';



@Component({
    selector: 'native-list',
    templateUrl: 'app/ts/templates/lists/lists.component.html',
    providers: [PostService, ElasticClient, YFPostHandler],
    directives: [ ROUTER_DIRECTIVES]
})

export class SetsListComponent implements OnInit {
    private postListDTO:PostListDTO[];
    private postsLength: number;
    private sub:any;
    private page:number;
    private tag: string;


    constructor(private postService: PostService, private route: ActivatedRoute){
        this.tag = 'sets';
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if(params['page']){
                this.page = parseInt(params['page']);
            } else {
                this.page = 1;
            }
            let from = ( this.page-1) * 20;
            this.sub = this.postService.getYFSetsNew(from, 20).subscribe(data => {
                this.postListDTO = this.postService.postToPostListDTO(data);
                this.postsLength = this.postListDTO.length;
            });

        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }




}