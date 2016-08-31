import { Component, OnInit} from '@angular/core';
import {PostListDTO} from './../objects/dtos/postListDTO';
import {PostService} from './../services/post.service';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers';
import {CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/components/carousel';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'native-top',
    templateUrl: 'app/ts/templates/post.new.top.component.html',
    providers: [PostService, ElasticClient, YFPostHandler],
    directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES],
    inputs: ['posts']
})

export class NewTopNativeComponent implements OnInit{
    private sub:any;
    private postListDTO:PostListDTO[];

    constructor(private postService: PostService){}

    ngOnInit(){

        this.sub = this.postService.getYFNativeTop(0, 5).subscribe(data => {
            this.postListDTO = this.postService.postToPostListDTO(data);

        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    ngAfterViewInit() {}


    }