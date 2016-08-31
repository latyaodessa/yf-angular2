import { Component } from '@angular/core';
import './rxjs-operators';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {PostlistComponent} from './ts/components/postlist.component';
import {NativeListComponent} from './ts/components/lists/native-list.component'
import {SearchComponent} from './ts/components/search.component'
import {SetsListComponent} from './ts/components/lists/sets-list.component'
import { PostDetailsComponent } from './ts/components/post.details.component';
import { MenuComponent } from './ts/components/core/menu.component';
import {PostWorkflow} from './ts/services/workflow/post.workflow';
import { CollapseDirective } from 'ng2-bootstrap/components/collapse';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';






@Component({
    selector: 'yf',
    templateUrl: 'app/ts/templates/app.component.html',
    directives: [ ROUTER_DIRECTIVES, CollapseDirective],
    providers: [PostWorkflow],
    precompile: [PostlistComponent, SetsListComponent, NativeListComponent, PostDetailsComponent, SearchComponent]
    })
export class AppComponent  {

    constructor(private router: Router){}

    search(query:string) {
        if(query) {
            this.router.navigate(['search', query.split(' ').join('+')]);
        }

    }
}