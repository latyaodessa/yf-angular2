import { Component, OnInit } from '@angular/core';
import {PostService} from './../services/post.service';
import {SuggestedPostsComponent} from './../components/sugessted.posts.component';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers'
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';
import {PostDetailsDTO} from './../objects/dtos/postDetailsDTO';
import {PostListDTO} from './../objects/dtos/postListDTO';
import {PostWorkflow} from './../services/workflow/post.workflow'
import {MessageConfig} from './../config/message.properties'




@Component({
    selector: 'search',
    templateUrl: 'app/ts/templates/search.component.html',
    providers: [PostService, ElasticClient, YFPostHandler],
    directives: [ROUTER_DIRECTIVES, SuggestedPostsComponent]
})

export class SearchComponent implements OnInit {
    private postListDTO:PostListDTO[];
    private queryTitle:string;
    private SEARCH_INQUERY = MessageConfig.SEARCH_INQUERY;
    private SEARCH = MessageConfig.SEARCH;
    private NOTING_FOUND = MessageConfig.NOTING_FOUND;




    constructor(private router: Router, private postService: PostService, private route: ActivatedRoute, private postWorkflow:PostWorkflow){}


    ngOnInit() {
        this.postListDTO = [];
        this.route.params.subscribe(params => {
            this.queryTitle = params['query'];
            if(this.queryTitle) {
               this.postService.findByText(0, 20, this.queryTitle).subscribe(data => {
                    this.postListDTO = this.postWorkflow.postToPostListDTO(data);
                });
            }else {
                console.log(this.queryTitle);
            }

    });


    }

    search(query:string) {
        if(query) {
            this.router.navigate(['search', query.split(' ').join('+')]);
        }
    }

}