import { Component, Pipe, PipeTransform } from '@angular/core';
import {Post} from './../objects/post';
import {PostService} from './../services/post.service';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers'


@Component({
    selector: 'native-top',
    templateUrl: 'app/ts/templates/post.new.top.component.html',
    providers: [PostService, ElasticClient, YFPostHandler],
    inputs: ['posts']
})

export class NewTopNativeComponent {
    private posts: Post[];

    constructor(private postService: PostService){
        this.postService.getYFNativeTop(0, 4).subscribe(data => {
            this.posts = data;
    });
    }


}