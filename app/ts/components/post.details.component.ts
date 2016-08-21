import { Component, OnInit } from '@angular/core';
import {PostService} from './../services/post.service';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers'
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import {Post} from './../objects/post';


@Component({
    template: `
    <div *ngIf="post">
        <h2>{{post.id}}</h2>
         <img class="img-responsive shadow" src={{post.postPhoto[1].photo_604}}/>

    </div>
    `,
    providers: [PostService, ElasticClient, YFPostHandler],
    directives: [ROUTER_DIRECTIVES]
})

export class PostDetailsComponent implements OnInit {
    private sub:any;
    private post:Post;

    constructor(private postService: PostService, private route: ActivatedRoute) {
        console.log("HALLO");

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {

            let id = params['id'];

            this.postService.findYFPostById(id).subscribe(post =>  this.post = post[0]);

        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}