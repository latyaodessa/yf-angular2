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
var window_size_1 = require('./../services/core/window.size');
var message_properties_1 = require('./../config/message.properties');
var setup_config_1 = require('./../config/setup.config');
var NewNativeComponent = (function () {
    function NewNativeComponent(postService, windowSize) {
        this.postService = postService;
        this.windowSize = windowSize;
        this.isMoreOrShowAll = true;
        this.title = message_properties_1.MessageConfig.NEW_NATIVE_TITLE;
        this.show_all_pics = message_properties_1.MessageConfig.SHOW_ALL_PICS;
        this.route = setup_config_1.SetupConfig.NATIVE_LIST_ROUTE;
        this.single_route = setup_config_1.SetupConfig.SINGLE_POST_ROUTE;
    }
    NewNativeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.windowSize.width$.subscribe(function (width) {
            if (width < 768) {
                _this.getPosts(4);
                _this.loadMoreTo = 8;
            }
            else if (width < 992) {
                _this.getPosts(3);
                _this.loadMoreTo = 6;
            }
            else {
                _this.getPosts(4);
                _this.loadMoreTo = 8;
            }
        });
    };
    NewNativeComponent.prototype.getPosts = function (size) {
        var _this = this;
        this.sub = this.postService.getYFNativeNew(0, size).subscribe(function (data) {
            _this.postListDTO = _this.postService.postToPostListDTO(data);
        });
    };
    NewNativeComponent.prototype.loadMore = function () {
        var _this = this;
        this.postService.loadMoreNative(this.postListDTO.length, this.loadMoreTo).subscribe(function (data) {
            _this.postListDTO = _this.postListDTO.concat(_this.postService.postToPostListDTO(data));
        });
        this.isMoreOrShowAll = false;
    };
    NewNativeComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewNativeComponent = __decorate([
        core_1.Component({
            selector: 'native-new',
            templateUrl: 'app/ts/templates/post.new.component.html',
            providers: [post_service_1.PostService, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler, window_size_1.WindowSize],
            directives: [router_1.ROUTER_DIRECTIVES],
            inputs: ['posts']
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, window_size_1.WindowSize])
    ], NewNativeComponent);
    return NewNativeComponent;
}());
exports.NewNativeComponent = NewNativeComponent;
//# sourceMappingURL=post.new.native.component.js.map