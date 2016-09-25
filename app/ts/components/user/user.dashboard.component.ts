import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import {StorageService} from './../../services/authorization/storage.service'
import {MessageConfig} from './../../config/message.properties'
import {SetupConfig} from './../../config/setup.config'
import {SavedPostDashboardComponent} from './saved.posts.dashboard.component'
import {SavedPhotosDashboardComponent} from './saved.photos.dashboard.component'
import {UserDashboardService} from './../../services/dashboard/user.dashboard.service'
import {DateTimeService} from './../../services/core/date.time.service'
import {ElasticClient} from './../../services/http/elastic.client.service';
import {UserDashboardRestClient} from './../../services/http/user.dashboard.rest.client'
import {YFUserHandler} from './../../services/handlers/yf.user.handlers'
import {YFPostHandler} from './../../services/handlers/yf.post.handlers';




@Component({
    selector: 'user-dashboard',
    templateUrl: 'app/ts/templates/user/user.dashboard.component.html',
    providers: [Title, StorageService, UserDashboardService, DateTimeService, ElasticClient,
                UserDashboardRestClient, YFUserHandler, YFPostHandler],
    directives: [ROUTER_DIRECTIVES, SavedPostDashboardComponent, SavedPhotosDashboardComponent]
})

export class UserDashboardComponent implements OnInit {
    private thumbnail:string;
    private first_name:string;
    private last_name:string;

    private EXIT = MessageConfig.EXIT;


    constructor(private router: Router, private route: ActivatedRoute, private titleService: Title, private storageService:StorageService) {
        if(!this.storageService.getUserId()) {
            this.router.navigateByUrl(SetupConfig.LOGIN_ROUTE);
        }
    }

    ngOnInit(){
        this.initLayout();
        this.initContent();
    }
    logout(){
        this.storageService.logout();
        window.location.href= "/";

    }


    initLayout(){
        this.titleService.setTitle(MessageConfig.DASHBOARD_TITLE +', '+ this.storageService.getUserFirstName() + ' ' + this.storageService.getUserLastName());

    }
    initContent(){
        this.thumbnail = this.storageService.getUserPhoto_50();
        this.first_name = this.storageService.getUserFirstName();
        this.last_name = this.storageService.getUserLastName();
    }



}
