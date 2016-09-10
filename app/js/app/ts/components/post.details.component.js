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
var PostDetailsComponent = (function () {
    function PostDetailsComponent(postService, route, titleService) {
        this.postService = postService;
        this.route = route;
        this.titleService = titleService;
        this.isExist = false;
        this.WAIT_UNTIL_POST_LOADS = message_properties_1.MessageConfig.WAIT_UNTIL_POST_LOADS;
        this.WAIT_UNTIL_POST_LOADS_SECOND_ROW = message_properties_1.MessageConfig.WAIT_UNTIL_POST_LOADS_SECOND_ROW;
        this.postDetailsDTO = new postDetailsDTO_1.PostDetailsDTO();
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.postService.findYFPostById(params['id']).subscribe(function (post) {
                if (post.length != 0) {
                    _this.isExist = true;
                    _this.postDetailsDTO = _this.postService.regexPostText(post[0]);
                    _this.postDetailsDTO.photos = _this.postService.findPhotosForPostDetails(post[0]);
                    _this.phForSuggested = _this.postDetailsDTO.ph;
                    _this.mdForSuggested = _this.postDetailsDTO.md;
                    _this.setTitle(_this.phForSuggested, _this.mdForSuggested);
                }
            });
        });
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
    PostDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostDetailsComponent = __decorate([
        core_1.Component({
            selector: 'post-details',
            templateUrl: 'app/ts/templates/post.details.component.html',
            providers: [post_service_1.PostService, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler, platform_browser_1.Title],
            directives: [router_1.ROUTER_DIRECTIVES, sugessted_posts_component_1.SuggestedPostsComponent, post_new_native_component_1.NewNativeComponent, post_new_sets_component_1.NewSetsComponent]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, router_1.ActivatedRoute, platform_browser_1.Title])
    ], PostDetailsComponent);
    return PostDetailsComponent;
}());
exports.PostDetailsComponent = PostDetailsComponent;
//# sourceMappingURL=post.details.component.js.map