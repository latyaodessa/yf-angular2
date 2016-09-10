import { Component, OnInit } from '@angular/core';
import {PostService} from './../../services/post.service';
import {ElasticClient} from './../../services/http/elastic.client.service';
import {YFPostHandler} from './../../services/handlers/yf.post.handlers'
import {YFUserHandler} from './../../services/handlers/yf.user.handlers'
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';
import {PostDetailsDTO} from './../../objects/dtos/postDetailsDTO';
import {PostListDTO} from './../../objects/dtos/postListDTO';
import {AuthorizationService} from './../../services/authorization.service'
import {VKRestClient} from './../../services/http/vk.rest.client'
import {MessageConfig} from './../../config/message.properties';
import {SetupConfig} from './../../config/setup.config';
import {ElasticUserClient} from './../../services/http/elastic.user.client.service'





@Component({
    selector: 'login',
    templateUrl: 'app/ts/templates/core/login.component.html',
    providers: [PostService, ElasticClient, ElasticUserClient, YFPostHandler,YFUserHandler, AuthorizationService,VKRestClient],
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent implements OnInit {
    public VK_BUTTON_TEXT = MessageConfig.VK_BUTTON_TEXT;

    constructor(private router: Router, private postService: PostService, private route: ActivatedRoute, private authorizationService:AuthorizationService){
    }

    authorize(){
        window.location.href= SetupConfig.VK_AUTHORIZATION_LINK;
    }


    ngOnInit() {
    }

}
