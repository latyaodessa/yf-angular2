import { Component, OnInit } from '@angular/core';
import {PostListDTO} from './../objects/dtos/postListDTO';
import {PostService} from './../services/post.service';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers';
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
    selector: 'native-new',
    templateUrl: 'app/ts/templates/post.new.component.html',
    providers: [PostService, ElasticClient, YFPostHandler],
    directives: [ ROUTER_DIRECTIVES],
    inputs: ['posts']
})

export class NewNativeComponent implements OnInit {
    private showMore: string;
    private showAll: string;
    private route: string;
    private postListDTO:PostListDTO[];
    private sub:any;


    constructor(private postService: PostService){
        this.showMore = "Ещё";
        this.route = 'native';
    }
    ngOnInit() {
        this.sub = this.postService.getYFNativeNew(0,4).subscribe(data => {
            this.postListDTO = this.postService.postToPostListDTO(data);
        });
    }

    loadMore(){
        this.postService.loadMoreNative(this.postListDTO.length).subscribe(data => {
            this.postListDTO = this.postListDTO.concat(this.postService.postToPostListDTO(data));
        });
        this.showMore = null;
        this.showAll = "Все наши модели";
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}