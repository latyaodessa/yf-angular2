import { Component, OnInit, Input } from '@angular/core';
import {PostListDTO} from './../objects/dtos/postListDTO';
import {PostService} from './../services/post.service';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import {PostDetailsDTO} from './../objects/dtos/postDetailsDTO';
import {PostWorkflow} from './../services/workflow/post.workflow'
import {WindowSize} from './../services/core/window.size';
import {MessageConfig} from './../config/message.properties';
import {SetupConfig} from './../config/setup.config';
import {PostSearchService} from './../services/post.search.service';
import {Post} from './../objects/post';




@Component({
    selector: 'suggested-posts',
    templateUrl: 'app/ts/templates/suggested.posts.component.html',
    providers: [PostService, ElasticClient, YFPostHandler, WindowSize, PostSearchService],
    directives: [ ROUTER_DIRECTIVES]
})

export class SuggestedPostsComponent implements OnInit {
    @Input() ph:string;
    @Input() md:string;
    private subParams:any;
    private subFindById: any;
    private subSuggestedPost: any;
    private subNewPosts:any;
    private postDetailsDTO:PostDetailsDTO;
    private postListDTO:PostListDTO[];

    public SUGGESTED_POSTS_TITLE = MessageConfig.SUGGESTED_POSTS_TITLE;
    public show_all_pics = MessageConfig.SHOW_ALL_PICS;
    public single_route = SetupConfig.SINGLE_POST_ROUTE;

    constructor(private postService: PostService, private route: ActivatedRoute, private postWorkflow:PostWorkflow,
                private windowSize:WindowSize, private postSearchService:PostSearchService){}

    ngOnInit() {
        this.windowSize.width$.subscribe(width => {
            if(width < 768){
                this.getPosts(4);
            } else if(width < 992){
                this.getPosts(3);
            } else {
                this.getPosts(4);
            }
        });
    }

    getPosts(size:number){
        this.subParams = this.route.params.subscribe(params => {
            this.subFindById =  this.postService.findYFPostById(params['id']).subscribe(post => {
                    let post_suggested:Post= post[0];
                    let query = (post_suggested.md + " " + post_suggested.ph).split(" ").toString();

                    this.subSuggestedPost = this.postSearchService.findByText(0, 20, query).subscribe(data => {
                        this.postListDTO = this.postWorkflow.findSuggestedPosts(data, post_suggested.id, size);
                        if (this.postListDTO.length < size) {
                            this.subNewPosts = this.postService.getYFSetsNativeNew(0, size - this.postListDTO.length).subscribe(data => {
                                this.postListDTO = this.postListDTO.concat(this.postService.postToPostListDTO(data));
                            });
                        }
                    });

            });
        });
    }
        ngOnDestroy() {
            this.subParams.unsubscribe();
            this.subFindById.unsubscribe();
            this.subSuggestedPost.unsubscribe();
            if(this.subNewPosts) {
                this.subNewPosts.unsubscribe();
            }

        }



}