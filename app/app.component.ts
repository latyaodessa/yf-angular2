import { Component, OnInit }         from '@angular/core';
import './rxjs-operators';
import {PostService} from './ts/services/post.service';
import  {PostlistComponent} from './ts/components/postlist.component';



@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/templates/app.component.html',
    directives: [PostlistComponent]
    })
export class AppComponent  implements OnInit {
    constructor(){}
    ngOnInit() {}

}