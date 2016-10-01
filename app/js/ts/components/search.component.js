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
var sugessted_posts_component_1 = require('./../components/sugessted.posts.component');
var elastic_client_service_1 = require('./../services/http/elastic.client.service');
var yf_post_handlers_1 = require('./../services/handlers/yf.post.handlers');
var router_1 = require('@angular/router');
var post_workflow_1 = require('./../services/workflow/post.workflow');
var message_properties_1 = require('./../config/message.properties');
var post_search_service_1 = require('./../services/post.search.service');
var SearchComponent = (function () {
    function SearchComponent(router, route, postWorkflow, postSearchService) {
        this.router = router;
        this.route = route;
        this.postWorkflow = postWorkflow;
        this.postSearchService = postSearchService;
        this.postListDTO = [];
        this.contentExist = true;
        this.searchingProceed = false;
        this.SEARCH_INQUERY = message_properties_1.MessageConfig.SEARCH_INQUERY;
        this.SEARCH = message_properties_1.MessageConfig.SEARCH;
        this.NOTING_FOUND = message_properties_1.MessageConfig.NOTING_FOUND;
    }
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.findByText = function (term) {
        var _this = this;
        if (term) {
            this.queryTitle = term;
            this.searchingProceed = true;
            this.contentExist = true;
            this.postSearchService.findByText(0, 20, term).subscribe(function (data) {
                _this.postListDTO = _this.postWorkflow.postToPostListDTO(data);
                _this.searchingProceed = false;
                if (data.length == 0) {
                    _this.contentExist = false;
                }
            });
        }
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: 'app/ts/templates/search.component.html',
            providers: [post_search_service_1.PostSearchService, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler],
            directives: [router_1.ROUTER_DIRECTIVES, sugessted_posts_component_1.SuggestedPostsComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, post_workflow_1.PostWorkflow, post_search_service_1.PostSearchService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map