import { Component, OnInit } from '@angular/core';
import {Post} from './../objects/post';
import {PostService} from './../services/post.service';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers';
import { ROUTER_DIRECTIVES } from '@angular/router';




@Component({
    selector: 'sets-new',
    templateUrl: 'app/ts/templates/post.new.component.html',
    providers: [PostService, ElasticClient, YFPostHandler],
    directives: [ ROUTER_DIRECTIVES],
    inputs: ['posts']
})

export class NewSetsComponent implements OnInit {
    private posts: Post[];
    private showMore: string;
    private sub:any;


    constructor(private postService: PostService){
        this.showMore = "Покажи мне еще";
    }
    ngOnInit() {
        this.sub = this.postService.getYFSetsNew(0, 4).subscribe(data => {
            this.posts = data;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    loadMore(){
        this.postService.loadMoreSets(this.posts.length).subscribe(data => {
            this.posts = this.posts.concat(data);
        });
    }


}