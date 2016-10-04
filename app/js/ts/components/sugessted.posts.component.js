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
var elastic_client_service_1 = require('./../services/http/elastic.client.service');
var yf_post_handlers_1 = require('./../services/handlers/yf.post.handlers');
var router_1 = require('@angular/router');
var post_workflow_1 = require('./../services/workflow/post.workflow');
var window_size_1 = require('./../services/core/window.size');
var message_properties_1 = require('./../config/message.properties');
var setup_config_1 = require('./../config/setup.config');
var post_search_service_1 = require('./../services/post.search.service');
var SuggestedPostsComponent = (function () {
    function SuggestedPostsComponent(postService, route, postWorkflow, windowSize, postSearchService) {
        this.postService = postService;
        this.route = route;
        this.postWorkflow = postWorkflow;
        this.windowSize = windowSize;
        this.postSearchService = postSearchService;
        this.SUGGESTED_POSTS_TITLE = message_properties_1.MessageConfig.SUGGESTED_POSTS_TITLE;
        this.show_all_pics = message_properties_1.MessageConfig.SHOW_ALL_PICS;
        this.single_route = setup_config_1.SetupConfig.SINGLE_POST_ROUTE;
    }
    SuggestedPostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.windowSize.width$.subscribe(function (width) {
            if (width < 768) {
                _this.getPosts(4);
            }
            else if (width < 992) {
                _this.getPosts(3);
            }
            else {
                _this.getPosts(4);
            }
        });
    };
    SuggestedPostsComponent.prototype.getPosts = function (size) {
        var _this = this;
        this.subParams = this.route.params.subscribe(function (params) {
            _this.subFindById = _this.postService.findYFPostById(params['id']).subscribe(function (post) {
                _this.postDetailsDTO = post[0];
                var query = (_this.postDetailsDTO.md + " " + _this.postDetailsDTO.ph).split(" ").toString();
                _this.subSuggestedPost = _this.postSearchService.findByText(0, 20, query).subscribe(function (data) {
                    _this.postListDTO = _this.postWorkflow.findSuggestedPosts(data, _this.postDetailsDTO.id, size);
                    if (_this.postListDTO.length < size) {
                        _this.subNewPosts = _this.postService.getYFSetsNativeNew(0, size - _this.postListDTO.length).subscribe(function (data) {
                            _this.postListDTO = _this.postListDTO.concat(_this.postService.postToPostListDTO(data));
                        });
                    }
                });
            });
        });
    };
    SuggestedPostsComponent.prototype.ngOnDestroy = function () {
        this.subParams.unsubscribe();
        this.subFindById.unsubscribe();
        this.subSuggestedPost.unsubscribe();
        if (this.subNewPosts) {
            this.subNewPosts.unsubscribe();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SuggestedPostsComponent.prototype, "ph", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SuggestedPostsComponent.prototype, "md", void 0);
    SuggestedPostsComponent = __decorate([
        core_1.Component({
            selector: 'suggested-posts',
            templateUrl: 'app/ts/templates/suggested.posts.component.html',
            providers: [post_service_1.PostService, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler, window_size_1.WindowSize, post_search_service_1.PostSearchService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, router_1.ActivatedRoute, post_workflow_1.PostWorkflow, window_size_1.WindowSize, post_search_service_1.PostSearchService])
    ], SuggestedPostsComponent);
    return SuggestedPostsComponent;
}());
exports.SuggestedPostsComponent = SuggestedPostsComponent;
//# sourceMappingURL=sugessted.posts.component.js.map