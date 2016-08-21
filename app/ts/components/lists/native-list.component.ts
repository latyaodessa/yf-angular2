import { Component, OnInit } from '@angular/core';
import {Post} from './../../objects/post';
import {PostService} from './../../services/post.service';
import {ElasticClient} from './../../services/http/elastic.client.service';
import {YFPostHandler} from './../../services/handlers/yf.post.handlers';
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
    selector: 'native-list',
    templateUrl: 'app/ts/templates/lists/lists.component.html',
    providers: [PostService, ElasticClient, YFPostHandler],
    directives: [ ROUTER_DIRECTIVES],
    inputs: ['posts']
})

export class NativeListComponent implements OnInit {
    private posts: Post[];
    private showMore: string;
    private sub:any;

    constructor(private postService: PostService){
        this.showMore = "Покажи мне еще";
    }
    ngOnInit() {
        this.sub =  this.postService.getYFNativeNew(0,20).subscribe(data => {
            this.posts = data;
        });
    }

    loadMore(){
        this.postService.loadMoreNative(this.posts.length).subscribe(data => {
            this.posts = this.posts.concat(data);
        });
        this.showMore = "Все новые фотографии";
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}