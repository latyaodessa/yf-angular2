import { Component }         from '@angular/core';
import './rxjs-operators';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {PostlistComponent} from './ts/components/postlist.component';
import {NativeListComponent} from './ts/components/lists/native-list.component'
import {SetsListComponent} from './ts/components/lists/sets-list.component'
import { PostDetailsComponent } from './ts/components/post.details.component';



@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/templates/app.component.html',
    directives: [ ROUTER_DIRECTIVES],
    precompile: [PostlistComponent, SetsListComponent, NativeListComponent, PostDetailsComponent]
    })
export class AppComponent {}