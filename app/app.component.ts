import { Component } from '@angular/core';
import './rxjs-operators';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
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


@Component({
    selector: 'yf',
    templateUrl: 'app/ts/templates/app.component.html',
    directives: [ ROUTER_DIRECTIVES, CollapseDirective],
    providers: [PostWorkflow],
    precompile: [PostlistComponent, SetsListComponent, NativeListComponent, PostDetailsComponent, SearchComponent, SilhouettesListComponent, SocialAuthorizationComponent, LoginComponent]
    })
export class AppComponent  {
    public MAIN_PAGE = MessageConfig.MAIN_PAGE;
    public SEARCH_INQUERY = MessageConfig.SEARCH_INQUERY;
    public SEARCH = MessageConfig.SEARCH;
    public ENTER = MessageConfig.ENTER;
    public NATIVE = MessageConfig.NATIVE;
    public SETS = MessageConfig.SETS;
    public SILHOUETTES = MessageConfig.SILHOUETTES;
    public YF_SLOGAN = MessageConfig.YF_SLOGAN;
    public sets_route = SetupConfig.SETS_LIST_ROUTE;
    public native_route = SetupConfig.NATIVE_LIST_ROUTE;
    public silhouettes_route = SetupConfig.SILHOUETTES_LIST_ROUTE;
    public login_route = SetupConfig.LOGIN_ROUTE;

    searchControl = new FormControl();


    constructor(private router: Router){

        this.searchControl.valueChanges.subscribe(value => {
            // do something with value here
        });
    }

    search(query:string) {
        if(query) {
            this.router.navigate(['search', query.split(' ').join('+')]);
        }
    }

    public isCollapsed:boolean = true;

    public collapsed(event:any):void {
        console.log(event);
    }

    public expanded(event:any):void {
        console.log(event);
    }


}