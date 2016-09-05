"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('./rxjs-operators');
var router_1 = require('@angular/router');
var postlist_component_1 = require('./ts/components/postlist.component');
var native_list_component_1 = require('./ts/components/lists/native-list.component');
var search_component_1 = require('./ts/components/search.component');
var sets_list_component_1 = require('./ts/components/lists/sets-list.component');
var post_details_component_1 = require('./ts/components/post.details.component');
var post_workflow_1 = require('./ts/services/workflow/post.workflow');
var collapse_1 = require('ng2-bootstrap/components/collapse');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.isCollapsed = true;
    }
    AppComponent.prototype.search = function (query) {
        if (query) {
            this.router.navigate(['search', query.split(' ').join('+')]);
        }
    };
    AppComponent.prototype.collapsed = function (event) {
        console.log(event);
    };
    AppComponent.prototype.expanded = function (event) {
        console.log(event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'yf',
            templateUrl: 'app/ts/templates/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, collapse_1.CollapseDirective],
            providers: [post_workflow_1.PostWorkflow],
            precompile: [postlist_component_1.PostlistComponent, sets_list_component_1.SetsListComponent, native_list_component_1.NativeListComponent, post_details_component_1.PostDetailsComponent, search_component_1.SearchComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map