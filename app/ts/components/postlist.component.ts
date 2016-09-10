import { Component } from '@angular/core';
import {Post} from './../objects/post';
import {PostService} from './../services/post.service';
import {ElasticClient} from './../services/http/elastic.client.service';
import {YFPostHandler} from './../services/handlers/yf.post.handlers'
import {NewNativeComponent} from './post.new.native.component';
import {NewSetsComponent} from './post.new.sets.component';
import {NewTopNativeComponent} from './post.top.native.component';
import {NewTopSetsComponent} from './post.top.sets.component';
import { Title }     from '@angular/platform-browser';
import {MessageConfig} from './../config/message.properties';





@Component({
    selector: 'postlist',
    templateUrl: '/app/ts/templates/postlist.component.html',
    directives: [NewNativeComponent, NewSetsComponent, NewTopNativeComponent, NewTopSetsComponent],
    providers: [PostService, ElasticClient, YFPostHandler, Title]
})

export class PostlistComponent {

    constructor(private titleService: Title){
        this.setTitle(MessageConfig.MAIN_TITLE)
    }

    public setTitle(title:string) {
        this.titleService.setTitle(title);
    }
}