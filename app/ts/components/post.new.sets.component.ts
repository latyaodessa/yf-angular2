import { Component, OnInit } from '@angular/core';
import {PostListDTO} from './../objects/dtos/postListDTO';
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
    private showMore: string;
    private showAll: string;
    private route: string;
    private sub:any;
    private postListDTO:PostListDTO[];


    constructor(private postService: PostService){
        this.showMore = "Ещё";
        this.route = 'sets';
    }

    ngOnInit() {
        this.sub = this.postService.getYFSetsNew(0, 4).subscribe(data => {
            this.postListDTO = this.postService.postToPostListDTO(data);


        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    loadMore(){
        this.postService.loadMoreSets(this.postListDTO.length).subscribe(data => {
            this.postListDTO = this.postListDTO.concat(this.postService.postToPostListDTO(data));
        });
        this.showMore = null;
        this.showAll = "Все зарубежные модели";
    }


}