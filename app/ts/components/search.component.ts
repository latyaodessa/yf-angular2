import { Component, OnInit } from '@angular/core';
import {SuggestedPostsComponent} from './../components/sugessted.posts.component';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers'
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';
import {PostDetailsDTO} from './../objects/dtos/postDetailsDTO';
import {PostListDTO} from './../objects/dtos/postListDTO';
import {PostWorkflow} from './../services/workflow/post.workflow'
import {MessageConfig} from './../config/message.properties'
import {PostSearchService} from './../services/post.search.service';
import {SetupConfig} from './../config/setup.config';






@Component({
    selector: 'search',
    templateUrl: 'app/ts/templates/search.component.html',
    providers: [PostSearchService, ElasticClient, YFPostHandler],
    directives: [ROUTER_DIRECTIVES, SuggestedPostsComponent]
})

export class SearchComponent implements OnInit {
    private postListDTO:PostListDTO[] = [];
    private contentExist:boolean = true;
    private searchingProceed:boolean = false;
    private queryTitle:string;
    private SEARCH_INQUERY = MessageConfig.SEARCH_INQUERY;
    private SEARCH = MessageConfig.SEARCH;
    private NOTING_FOUND = MessageConfig.NOTING_FOUND;
    public single_route = SetupConfig.SINGLE_POST_ROUTE;






    constructor(private router: Router, private route: ActivatedRoute, private postWorkflow:PostWorkflow, private postSearchService:PostSearchService){}


    ngOnInit() {}

    private findByText(term:string) {
        if (term) {
            this.queryTitle = term;
            this.searchingProceed = true;
            this.contentExist = true;
            this.postSearchService.findByText(0, 20, term).subscribe(data => {
                this.postListDTO = this.postWorkflow.postToPostListDTO(data);
                this.searchingProceed = false;
                if(data.length == 0){
                    this.contentExist = false;
                }
            });
        }
    }


}