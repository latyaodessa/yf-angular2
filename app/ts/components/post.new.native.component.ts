import { Component, OnInit } from '@angular/core';
import {Post} from './../objects/post';
import {PostService} from './../services/post.service';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers'


@Component({
    selector: 'native-new',
    templateUrl: 'app/ts/templates/post.new.component.html',
    providers: [PostService, ElasticClient, YFPostHandler],
    inputs: ['posts']
})

export class NewNativeComponent implements OnInit {
    private posts: Post[];

    constructor(private postService: PostService){
        this.postService.getYFNativeNew(0,4).subscribe(data => {
            this.posts = data;
        });
    }
    ngOnInit() {}

    loadMore(){
        this.postService.loadMoreNative(this.posts.length).subscribe(data => {
            this.posts = this.posts.concat(data);
        });
    }


}