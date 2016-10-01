import { Component, OnInit } from '@angular/core';
import './rxjs-operators';
import {Router, ROUTER_DIRECTIVES, Event, NavigationEnd} from '@angular/router';
import {PostlistComponent} from './ts/components/postlist.component';
import {NativeListComponent} from './ts/components/lists/native-list.component'
import {SearchComponent} from './ts/components/search.component'
import {SetsListComponent} from './ts/components/lists/sets-list.component'
import {SocialAuthorizationComponent} from './ts/components/core/soical.authorization.component';
import {LoginComponent} from './ts/components/core/login.component';
import {SilhouettesListComponent} from './ts/components/lists/silhouettes-list.component'
import { PostDetailsComponent } from './ts/components/post.details.component';
import {PostWorkflow} from './ts/services/workflow/post.workflow';
import { CollapseDirective } from 'ng2-bootstrap/components/collapse';
import { FormGroup, FormControl } from '@angular/forms';
import {MessageConfig} from './ts/config/message.properties';
import {SetupConfig} from './ts/config/setup.config';
import {StorageService} from './ts/services/authorization/storage.service'
import {VKStorageUserDTO} from './ts/objects/user/dtos/vk.storage.user.dto'
import {UserDashboardComponent} from './ts/components/user/user.dashboard.component'
declare let ga:Function;


@Component({
    selector: 'yf',
    templateUrl: 'app/ts/templates/app.component.html',
    directives: [ ROUTER_DIRECTIVES, CollapseDirective],
    providers: [PostWorkflow, StorageService, SetupConfig],
    precompile: [PostlistComponent, SetsListComponent, NativeListComponent, PostDetailsComponent,
                SearchComponent, SilhouettesListComponent, SocialAuthorizationComponent, LoginComponent,
                UserDashboardComponent]
    })
export class AppComponent  implements OnInit{
    MAIN_PAGE:string;ENTER:string; EXIT:string; NATIVE:string;
    SETS:string;SILHOUETTES:string; YF_SLOGAN:string;

    sets_route:string;native_route:string;dashboard_route:string;
    silhouettes_route:string;login_route:string; search_route:string;

    searchControl = new FormControl();

    public isLoggedIn:boolean;
    public vkStorageUserDTO:VKStorageUserDTO;


    constructor(private router: Router, private storageService:StorageService, private setupConfig:SetupConfig){

        ga('create', SetupConfig.GOOGLE_AN_ID, SetupConfig.GOOGLE_AN_MODE);

        this.router.events.subscribe(
            (event:Event) => {
                if (event instanceof NavigationEnd) {
                    ga('send', 'pageview', event.urlAfterRedirects);
                }
            });

        this.searchControl.valueChanges.subscribe(value => {
            // do something with value here
        });
    }

    ngOnInit() {
        this.initMessageProperties();
        this.initSetupProperties();
        this.initLoginEventListeners();
        this.checkCurrentLogin();


    }

    initLoginEventListeners(){
        this.storageService.getEmittedLoginStatus().subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
        this.storageService.getEmittedvkUserDTO().subscribe(userDTO => this.vkStorageUserDTO = userDTO);
    }



        initMessageProperties(){
            this.MAIN_PAGE = MessageConfig.MAIN_PAGE;
            this.ENTER = MessageConfig.ENTER;
            this.EXIT = MessageConfig.EXIT;
            this.NATIVE = MessageConfig.NATIVE;
            this.SETS = MessageConfig.SETS;
            this.SILHOUETTES = MessageConfig.SILHOUETTES;
            this.YF_SLOGAN = MessageConfig.YF_SLOGAN;
    }
         initSetupProperties(){
            this.sets_route = SetupConfig.SETS_LIST_ROUTE;
            this.native_route = SetupConfig.NATIVE_LIST_ROUTE;
            this.silhouettes_route = SetupConfig.SILHOUETTES_LIST_ROUTE;
            this.login_route = SetupConfig.LOGIN_ROUTE;
             this.search_route = SetupConfig.SEARCH_ROUTE;
             this.dashboard_route = SetupConfig.DASHBOARD_ROUTE;
         }

    checkCurrentLogin(){
        this.storageService.checkIsUserLoggedIn();

        if(this.isLoggedIn){
            this.storageService.getVkUserDTO();
        }
    }
    logout(){
        this.storageService.logout();
        this.router.navigate(['/']);
    }

    public isCollapsed:boolean = true;

    public collapsed(event:any):void {
        console.log(event);
    }

    public expanded(event:any):void {
        console.log(event);
    }


}