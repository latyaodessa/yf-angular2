import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'saved-photos-dashboard',
    templateUrl: 'app/ts/templates/pages/info.page.component.html',
    providers: [],
    directives: [ROUTER_DIRECTIVES]
})

export class InfoPage{

    private test = "<h1 style='color: red'>test</h1>";
}