import { Component, OnInit } from '@angular/core';
import {PostService} from './../../services/post.service';
import {ElasticClient} from './../../services/http/elastic.client.service';
import {ElasticUserClient} from './../../services/http/elastic.user.client.service';
import {YFUserHandler} from './../../services/handlers/yf.user.handlers'
import {YFPostHandler} from './../../services/handlers/yf.post.handlers'
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';
import {PostDetailsDTO} from './../../objects/dtos/postDetailsDTO';
import {PostListDTO} from './../../objects/dtos/postListDTO';
import {AuthorizationService} from './../../services/authorization.service'
import {VKRestClient} from './../../services/http/vk.rest.client'
import {UserWorkflow} from './../../services/workflow/user.workflow';

@Component({
    selector: 'authorization',
    template: '',
    providers: [PostService, ElasticClient, ElasticUserClient, YFUserHandler, YFPostHandler, AuthorizationService,VKRestClient, UserWorkflow],
    directives: [ROUTER_DIRECTIVES]
})

export class SocialAuthorizationComponent implements OnInit {




    constructor(private router: Router, private postService: PostService, private route: ActivatedRoute, private authorizationService:AuthorizationService){
        let from:string;

        this.route.params.subscribe(routeParams => from = routeParams['from']);

        const fragment: Observable<string> = router.routerState.fragment;
        fragment.subscribe(params => {
            authorizationService.authorizeUser(window.location.hash, from);
        });


    }


    ngOnInit() {

    }

    ngOnDestroy() {


    }
}