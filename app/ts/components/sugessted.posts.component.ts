import { Component, OnInit, Input } from '@angular/core';
import {PostListDTO} from './../objects/dtos/postListDTO';
import {PostService} from './../services/post.service';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import {PostDetailsDTO} from './../objects/dtos/postDetailsDTO';
import {PostWorkflow} from './../services/workflow/post.workflow'




@Component({
    selector: 'suggested-posts',
    templateUrl: 'app/ts/templates/suggested.posts.component.html',
    providers: [PostService, ElasticClient, YFPostHandler],
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

    constructor(private postService: PostService, private route: ActivatedRoute, private postWorkflow:PostWorkflow){}

    ngOnInit() {
        this.subParams = this.route.params.subscribe(params => {
           this.subFindById =  this.postService.findYFPostById(params['id']).subscribe(post => {
                this.postDetailsDTO = this.postService.regexPostText(post[0]);
                let query = (this.postDetailsDTO.md + " " +  this.postDetailsDTO.ph).split(" ").toString();

                this.subSuggestedPost = this.postService.findByText(0,20,query).subscribe(data => {
                    this.postListDTO =  this.postWorkflow.findSuggestedPosts(data, this.postDetailsDTO.id);
                    if(this.postListDTO.length < 4){
                        this.subNewPosts = this.postService.getYFSetsNativeNew(0,4-this.postListDTO.length).subscribe(data => {
                            console.log(data);
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