import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {AuthorizationService} from './../../services/authorization.service'
import {MessageConfig} from './../../config/message.properties';
import {SetupConfig} from './../../config/setup.config';
import {FBRestClient} from './../../services/http/fb.rest.client'
import {YFUserHandler} from './../../services/handlers/yf.user.handlers';
import {FBSocialAuthorizationService} from './../../services/authorization/fb.social.authorization.service'
import {StorageService} from './../../services/authorization/storage.service'



@Component({
    selector: 'login',
    templateUrl: 'app/ts/templates/core/login.component.html',
    providers: [FBSocialAuthorizationService,  AuthorizationService, FBRestClient, YFUserHandler, StorageService],
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {
    public VK_BUTTON_TEXT = MessageConfig.VK_BUTTON_TEXT;
    public FB_BUTTON_TEXT = MessageConfig.FB_BUTTON_TEXT;

    constructor(private fBSocialAuthorizationService:FBSocialAuthorizationService, private storageService:StorageService, private router: Router){}

    authorizeWithVK(){
        window.location.href= SetupConfig.VK_AUTHORIZATION_LINK;
    }
    authorizeWithFB() {
        this.fBSocialAuthorizationService.authorizeWithFB();
    }


    }
