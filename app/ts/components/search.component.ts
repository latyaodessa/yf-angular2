import { Component, OnInit } from '@angular/core';
import {PostService} from './../services/post.service';
import {SuggestedPostsComponent} from './../components/sugessted.posts.component';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers'
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import {PostDetailsDTO} from './../objects/dtos/postDetailsDTO';
import {PostListDTO} from './../objects/dtos/postListDTO';
import {PostWorkflow} from './../services/workflow/post.workflow'



@Component({
    selector: 'search',
    templateUrl: 'app/ts/templates/search.component.html',
    providers: [PostService, ElasticClient, YFPostHandler],
    directives: [ROUTER_DIRECTIVES, SuggestedPostsComponent]
})

export class SearchComponent implements OnInit {
    private sub:any;
    private subParams:any;
    private postListDTO:PostListDTO[];
    private queryTitle:string;



    constructor(private postService: PostService, private route: ActivatedRoute, private postWorkflow:PostWorkflow){}


    ngOnInit() {
        this.postListDTO = [];
        this.subParams = this.route.params.subscribe(params => {
            this.queryTitle = params['query'];
            this.sub = this.postService.findByText(0,20,this.queryTitle).subscribe(data => {
                this.postListDTO =  this.postWorkflow.postToPostListDTO(data);

                console.log(this.postListDTO);

        });

    });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
        this.subParams.unsubscribe();

    }
}