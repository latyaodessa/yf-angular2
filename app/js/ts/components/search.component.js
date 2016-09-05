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
var post_service_1 = require('./../services/post.service');
var sugessted_posts_component_1 = require('./../components/sugessted.posts.component');
var elastic_client_service_1 = require('./../services/http/elastic.client.service');
var yf_post_handlers_1 = require('./../services/handlers/yf.post.handlers');
var router_1 = require('@angular/router');
var post_workflow_1 = require('./../services/workflow/post.workflow');
var SearchComponent = (function () {
    function SearchComponent(postService, route, postWorkflow) {
        this.postService = postService;
        this.route = route;
        this.postWorkflow = postWorkflow;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postListDTO = [];
        this.subParams = this.route.params.subscribe(function (params) {
            _this.queryTitle = params['query'];
            _this.sub = _this.postService.findByText(0, 20, _this.queryTitle).subscribe(function (data) {
                _this.postListDTO = _this.postWorkflow.postToPostListDTO(data);
            });
        });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.subParams.unsubscribe();
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: 'app/ts/templates/search.component.html',
            providers: [post_service_1.PostService, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler],
            directives: [router_1.ROUTER_DIRECTIVES, sugessted_posts_component_1.SuggestedPostsComponent]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, router_1.ActivatedRoute, post_workflow_1.PostWorkflow])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map