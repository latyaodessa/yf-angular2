import { Component, OnInit } from '@angular/core';
import {PostService} from './../services/post.service';
import {SuggestedPostsComponent} from './../components/sugessted.posts.component';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers'
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import {NewNativeComponent} from './post.new.native.component';
import {NewSetsComponent} from './post.new.sets.component';
import {PostDetailsDTO} from './../objects/dtos/postDetailsDTO';
import { Title }     from '@angular/platform-browser';
import {MessageConfig} from './../config/message.properties';


@Component({
    selector: 'post-details',
    templateUrl: 'app/ts/templates/post.details.component.html',
    providers: [PostService, ElasticClient, YFPostHandler, Title],
    directives: [ROUTER_DIRECTIVES, SuggestedPostsComponent, NewNativeComponent, NewSetsComponent]
})

export class PostDetailsComponent implements OnInit {
    private sub:any;
    private postDetailsDTO:PostDetailsDTO;
    private phForSuggested:string;
    private mdForSuggested:string;
    private isExist:boolean = false;
    public WAIT_UNTIL_POST_LOADS = MessageConfig.WAIT_UNTIL_POST_LOADS;
    public WAIT_UNTIL_POST_LOADS_SECOND_ROW = MessageConfig.WAIT_UNTIL_POST_LOADS_SECOND_ROW;


    constructor(private postService: PostService, private route: ActivatedRoute, private titleService: Title ) {
        this.postDetailsDTO = new PostDetailsDTO();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
                this.postService.findYFPostById(params['id']).subscribe(post => {
                    if(post.length != 0){
                        this.isExist = true;
                        this.postDetailsDTO = this.postService.regexPostText(post[0]);
                        this.postDetailsDTO.photos = this.postService.findPhotosForPostDetails(post[0]);
                        this.phForSuggested = this.postDetailsDTO.ph;
                        this.mdForSuggested = this.postDetailsDTO.md;
                        this.setTitle(this.phForSuggested, this.mdForSuggested);
                    }
                });



        });

    }

    public setTitle(ph:string, md:string) {
        if(ph && md) {
            this.titleService.setTitle(MessageConfig.MD_DETAILS_TITLE + " " + md + " | " + MessageConfig.PH_DETAILS_TITLE + " " +ph);
        } else if(md){
            this.titleService.setTitle(MessageConfig.MD_DETAILS_TITLE + " " +  md);
        } else if(ph){
            this.titleService.setTitle(MessageConfig.PH_DETAILS_TITLE + " " + ph);
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}