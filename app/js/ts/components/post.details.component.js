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
var post_new_native_component_1 = require('./post.new.native.component');
var post_new_sets_component_1 = require('./post.new.sets.component');
var postDetailsDTO_1 = require('./../objects/dtos/postDetailsDTO');
var platform_browser_1 = require('@angular/platform-browser');
var message_properties_1 = require('./../config/message.properties');
var setup_config_1 = require('./../config/setup.config');
var user_dashboard_service_1 = require('./../services/dashboard/user.dashboard.service');
var storage_service_1 = require('./../services/authorization/storage.service');
var date_time_service_1 = require('./../services/core/date.time.service');
var user_dashboard_rest_client_1 = require('./../services/http/user.dashboard.rest.client');
var yf_user_handlers_1 = require('./../services/handlers/yf.user.handlers');
var collapse_1 = require('ng2-bootstrap/components/collapse');
var login_component_1 = require('./../components/core/login.component');
var social_servcie_1 = require('./../services/core/social.servcie');
var post_workflow_1 = require('./../services/workflow/post.workflow');
var PostDetailsComponent = (function () {
    function PostDetailsComponent(postService, route, titleService, userDashboardService, storageService, userDashboardRestClient, socialService, postWorkflow) {
        this.postService = postService;
        this.route = route;
        this.titleService = titleService;
        this.userDashboardService = userDashboardService;
        this.storageService = storageService;
        this.userDashboardRestClient = userDashboardRestClient;
        this.socialService = socialService;
        this.postWorkflow = postWorkflow;
        this.user_dashboard_route = setup_config_1.SetupConfig.DASHBOARD_ROUTE;
        this.isExist = false;
        this.isCollapsedModal = true;
        this.DETAILS_SAVE_POST_IN_DASHBOARD = message_properties_1.MessageConfig.DETAILS_SAVE_POST_IN_DASHBOARD;
        this.SAVED_POST = message_properties_1.MessageConfig.DETAILS_POST_ALREADY_SAVED;
        this.loginNeeded = false;
        this.isPostAlreadySaved = false;
        this.CLOSE_MODAL = message_properties_1.MessageConfig.CLOSE_MODAL;
        this.SHARE_BUTTON_TEXT = message_properties_1.MessageConfig.SHARE_BUTTON_TEXT;
        this.OPEN_POST_IN_VK = message_properties_1.MessageConfig.OPEN_POST_IN_VK;
        this.postDetailsDTO = new postDetailsDTO_1.PostDetailsDTO(null, null, null, null, null);
        this.isCollapsedModal = true;
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.postService.findYFPostById(params['id']).subscribe(function (post) {
                if (post.length != 0) {
                    _this.isExist = true;
                    _this.postDetailsDTO = _this.postWorkflow.postToPostDetailsDTO(post[0]);
                    _this.postDetailsDTO.photos = _this.postService.findPhotosForPostDetails(post[0]);
                    _this.phForSuggested = _this.postDetailsDTO.ph;
                    _this.mdForSuggested = _this.postDetailsDTO.md;
                    _this.setTitle(_this.phForSuggested, _this.mdForSuggested);
                    _this.isPostAlreadySavedToUser();
                }
            });
        });
    };
    PostDetailsComponent.prototype.shareButton = function (social) {
        if (social == 'vk') {
            window.open(this.socialService.getVkShareLink(this.postDetailsDTO.photos[0]), "");
        }
        else if (social == 'fb') {
            this.socialService.getFbShareLink(this.postDetailsDTO.photos[0]);
        }
        else if (social == 'tumblr') {
            window.open(this.socialService.getTumblrLink(), "_blank");
        }
    };
    PostDetailsComponent.prototype.isPostAlreadySavedToUser = function () {
        var _this = this;
        if (this.storageService.getUserId()) {
            this.userDashboardRestClient.isPostAlreadySavedToUser(this.storageService.getUserId(), this.postDetailsDTO.id)
                .subscribe(function (result) {
                _this.isPostAlreadySaved = result;
            });
        }
    };
    PostDetailsComponent.prototype.setTitle = function (ph, md) {
        if (ph && md) {
            this.titleService.setTitle(message_properties_1.MessageConfig.MD_DETAILS_TITLE + " " + md + " | " + message_properties_1.MessageConfig.PH_DETAILS_TITLE + " " + ph);
        }
        else if (md) {
            this.titleService.setTitle(message_properties_1.MessageConfig.MD_DETAILS_TITLE + " " + md);
        }
        else if (ph) {
            this.titleService.setTitle(message_properties_1.MessageConfig.PH_DETAILS_TITLE + " " + ph);
        }
    };
    PostDetailsComponent.prototype.savePostToDashboard = function () {
        if (!this.storageService.getUserId()) {
            this.isCollapsedModal = false;
            this.MODAL_TITLE = message_properties_1.MessageConfig.MODAL_TITLE_PHOTOSET;
            this.MODAL_TEXT = message_properties_1.MessageConfig.MODAL_TEXT_NOT_LOGGED_IN;
            this.loginNeeded = true;
            return;
        }
        if (!this.isPostAlreadySaved) {
            this.isCollapsedModal = true;
            this.userDashboardService.savePostTODashboard(this.postDetailsDTO.id, this.storageService.getUserId());
            this.isPostAlreadySaved = true;
            this.SAVED_POST = message_properties_1.MessageConfig.DETAILS_POST_SUCCESSFULLY_SAVED;
        }
    };
    PostDetailsComponent.prototype.saveSinglePhoto = function (photo) {
        var _this = this;
        if (!this.storageService.getUserId()) {
            this.isCollapsedModal = false;
            this.MODAL_TITLE = message_properties_1.MessageConfig.MODAL_TITLE_SINGLE_PHOTO;
            this.MODAL_TEXT = message_properties_1.MessageConfig.MODAL_TEXT_NOT_LOGGED_IN;
            this.loginNeeded = true;
            return;
        }
        this.userDashboardRestClient.savePhotoToUserDashboard(this.userDashboardService.generatePhotoSaveDTOForUser(this.storageService.getUserId(), photo, this.postDetailsDTO.ph, this.postDetailsDTO.md, this.postDetailsDTO.id))
            .subscribe(function (result) {
            _this.single_photo_text_img_url = photo;
            if (result) {
                _this.single_post_text = "Фотография успешно добавлена";
            }
            else {
                _this.single_post_text = "Фотография уже есть в вашем профайле";
            }
        });
    };
    PostDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostDetailsComponent = __decorate([
        core_1.Component({
            selector: 'post-details',
            templateUrl: 'app/ts/templates/post.details.component.html',
            providers: [post_service_1.PostService, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler, platform_browser_1.Title, user_dashboard_service_1.UserDashboardService,
                storage_service_1.StorageService, date_time_service_1.DateTimeService, user_dashboard_rest_client_1.UserDashboardRestClient, yf_user_handlers_1.YFUserHandler, social_servcie_1.SocialService,
                post_workflow_1.PostWorkflow],
            directives: [router_1.ROUTER_DIRECTIVES, sugessted_posts_component_1.SuggestedPostsComponent, login_component_1.LoginComponent, post_new_native_component_1.NewNativeComponent, post_new_sets_component_1.NewSetsComponent, collapse_1.CollapseDirective]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, router_1.ActivatedRoute, platform_browser_1.Title, user_dashboard_service_1.UserDashboardService, storage_service_1.StorageService, user_dashboard_rest_client_1.UserDashboardRestClient, social_servcie_1.SocialService, post_workflow_1.PostWorkflow])
    ], PostDetailsComponent);
    return PostDetailsComponent;
}());
exports.PostDetailsComponent = PostDetailsComponent;
//# sourceMappingURL=post.details.component.js.map