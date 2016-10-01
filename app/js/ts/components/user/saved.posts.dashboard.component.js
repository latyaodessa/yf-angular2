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
var post_service_1 = require('./../../services/post.service');
var elastic_client_service_1 = require('./../../services/http/elastic.client.service');
var yf_post_handlers_1 = require('./../../services/handlers/yf.post.handlers');
var router_1 = require('@angular/router');
var window_size_1 = require('./../../services/core/window.size');
var message_properties_1 = require('./../../config/message.properties');
var setup_config_1 = require('./../../config/setup.config');
var user_dashboard_service_1 = require('./../../services/dashboard/user.dashboard.service');
var storage_service_1 = require('./../../services/authorization/storage.service');
var user_dashboard_rest_client_1 = require('./../../services/http/user.dashboard.rest.client');
var SavedPostDashboardComponent = (function () {
    function SavedPostDashboardComponent(postService, windowSize, userDashboardService, storageService, userDashboardRestClient) {
        this.postService = postService;
        this.windowSize = windowSize;
        this.userDashboardService = userDashboardService;
        this.storageService = storageService;
        this.userDashboardRestClient = userDashboardRestClient;
        this.NO_SAVED_POSTS = message_properties_1.MessageConfig.NO_SAVED_POSTS;
        this.title = message_properties_1.MessageConfig.SAVED_POSTS_TITLE;
        this.postListDTO = [];
        this.show_all_pics = message_properties_1.MessageConfig.SHOW_ALL_PICS;
        this.route = setup_config_1.SetupConfig.NATIVE_LIST_ROUTE;
        this.single_route = setup_config_1.SetupConfig.SINGLE_POST_ROUTE;
        this.loadMorePostPossible = true;
        this.contentExistence = true;
        this.isContentExist = function (count) {
            return count > 0 ? true : false;
        };
    }
    SavedPostDashboardComponent.prototype.ngOnInit = function () {
        this.getPosts(SavedPostDashboardComponent.loadInitAmount);
    };
    SavedPostDashboardComponent.prototype.getPosts = function (size) {
        var _this = this;
        this.userDashboardService.getSavedPosts(0, size, this.storageService.getUserId()).subscribe(function (savedPosts) {
            _this.contentExistence = _this.isContentExist(savedPosts.length);
            _this.postService.getPostsByMultipleIds(savedPosts).subscribe(function (posts) {
                if (posts.length < SavedPostDashboardComponent.loadInitAmount) {
                    _this.loadMorePostPossible = false;
                }
                _this.sortPostsByDate(savedPosts, _this.postService.postToPostListDTO(posts));
            });
        });
    };
    SavedPostDashboardComponent.prototype.sortPostsByDate = function (savedPosts, postListDTO) {
        for (var _i = 0, savedPosts_1 = savedPosts; _i < savedPosts_1.length; _i++) {
            var saved = savedPosts_1[_i];
            this.postListDTO.push(this.findPostListDTOById(saved, postListDTO));
        }
    };
    SavedPostDashboardComponent.prototype.findPostListDTOById = function (saved, postListDTO) {
        return postListDTO.find(function (p) {
            return p.id == saved.post_id;
        });
    };
    SavedPostDashboardComponent.prototype.loadOne = function () {
        var _this = this;
        this.userDashboardService.getSavedPosts(this.postListDTO.length + 1, SavedPostDashboardComponent.loadOneAmount, this.storageService.getUserId()).subscribe(function (savedPosts) {
            _this.postService.getPostsByMultipleIds(savedPosts).subscribe(function (posts) {
                //this.postListDTO = this.postService.postToPostListDTO(posts);
                _this.sortPostsByDate(savedPosts, _this.postService.postToPostListDTO(posts));
            });
        });
    };
    SavedPostDashboardComponent.prototype.loadMore = function () {
        var _this = this;
        this.userDashboardService.getSavedPosts(this.postListDTO.length, SavedPostDashboardComponent.loadMoreAmount, this.storageService.getUserId()).subscribe(function (savedPosts) {
            _this.postService.getPostsByMultipleIds(savedPosts).subscribe(function (posts) {
                _this.isLoadMorePossible(posts.length, SavedPostDashboardComponent.loadMoreAmount);
                _this.sortPostsByDate(savedPosts, _this.postService.postToPostListDTO(posts));
            });
        });
    };
    SavedPostDashboardComponent.prototype.deleteSavedPost = function (postid) {
        var _this = this;
        this.postListDTO.splice(this.postListDTO.findIndex(function (post) {
            return post.id == postid;
        }), 1);
        this.userDashboardRestClient.deletePostById(this.storageService.getUserId(), postid).subscribe(function (res) {
            _this.loadOne();
            _this.contentExistence = _this.isContentExist(_this.postListDTO.length);
        });
    };
    SavedPostDashboardComponent.prototype.isLoadMorePossible = function (length, amount) {
        if (length < amount) {
            this.loadMorePostPossible = false;
        }
    };
    SavedPostDashboardComponent.loadInitAmount = 6;
    SavedPostDashboardComponent.loadMoreAmount = 12;
    SavedPostDashboardComponent.loadOneAmount = 1;
    SavedPostDashboardComponent = __decorate([
        core_1.Component({
            selector: 'saved-posts-dashboard',
            templateUrl: 'app/ts/templates/user/saved.posts.dashboard.component.html',
            providers: [post_service_1.PostService, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler, window_size_1.WindowSize, storage_service_1.StorageService, user_dashboard_rest_client_1.UserDashboardRestClient],
            directives: [router_1.ROUTER_DIRECTIVES],
            inputs: ['posts']
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, window_size_1.WindowSize, user_dashboard_service_1.UserDashboardService, storage_service_1.StorageService, user_dashboard_rest_client_1.UserDashboardRestClient])
    ], SavedPostDashboardComponent);
    return SavedPostDashboardComponent;
}());
exports.SavedPostDashboardComponent = SavedPostDashboardComponent;
//# sourceMappingURL=saved.posts.dashboard.component.js.map