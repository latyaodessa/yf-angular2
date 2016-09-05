import { Component, OnInit } from '@angular/core';
import {PostService} from './../services/post.service';
import {SuggestedPostsComponent} from './../components/sugessted.posts.component';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers'
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import {PostDetailsDTO} from './../objects/dtos/postDetailsDTO';



@Component({
    selector: 'post-details',
    templateUrl: 'app/ts/templates/post.details.component.html',
    providers: [PostService, ElasticClient, YFPostHandler],
    directives: [ROUTER_DIRECTIVES, SuggestedPostsComponent]
})

export class PostDetailsComponent implements OnInit {
    private sub:any;
    private postDetailsDTO:PostDetailsDTO;
    private phForSuggested:string;
    private mdForSuggested:string;


    constructor(private postService: PostService, private route: ActivatedRoute) {
        this.postDetailsDTO = new PostDetailsDTO();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.postService.findYFPostById(params['id']).subscribe(post => {
                this.postDetailsDTO = this.postService.regexPostText(post[0]);
                this.postDetailsDTO.photos = this.postService.findPhotosForPostDetails(post[0]);
                this.phForSuggested = this.postDetailsDTO.ph;
                this.mdForSuggested = this.postDetailsDTO.md;
            });
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}