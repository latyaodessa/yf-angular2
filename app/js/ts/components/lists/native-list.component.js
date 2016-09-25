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
var platform_browser_1 = require('@angular/platform-browser');
var message_properties_1 = require('./../../config/message.properties');
var setup_config_1 = require('./../../config/setup.config');
var NativeListComponent = (function () {
    function NativeListComponent(postService, route, windowSize, titleService) {
        this.postService = postService;
        this.route = route;
        this.windowSize = windowSize;
        this.titleService = titleService;
        this.tag = setup_config_1.SetupConfig.NATIVE_LIST_ROUTE;
        this.show_all_pics = message_properties_1.MessageConfig.SHOW_ALL_PICS;
        this.single_route = setup_config_1.SetupConfig.SINGLE_POST_ROUTE;
        this.setTitle(message_properties_1.MessageConfig.NATIVE_LIST_TITLE);
    }
    NativeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.windowSize.width$.subscribe(function (width) {
            if (width < 768) {
                _this.size = 20;
                _this.getPosts(_this.size);
            }
            else if (width < 992) {
                _this.size = 15;
                _this.getPosts(_this.size);
            }
            else {
                _this.size = 20;
                _this.getPosts(_this.size);
            }
        });
    };
    NativeListComponent.prototype.getPosts = function (size) {
        var _this = this;
        this.subParams = this.route.params.subscribe(function (params) {
            if (params['page']) {
                _this.page = parseInt(params['page']);
            }
            else {
                _this.page = 1;
            }
            var from = (_this.page - 1) * size;
            _this.subNewPosts = _this.postService.getYFNativeNew(from, size).subscribe(function (data) {
                _this.postListDTO = _this.postService.postToPostListDTO(data);
                _this.postsLength = _this.postListDTO.length;
            });
        });
    };
    NativeListComponent.prototype.ngOnDestroy = function () {
        this.subParams.unsubscribe();
        this.subNewPosts.unsubscribe();
    };
    NativeListComponent.prototype.setTitle = function (title) {
        this.titleService.setTitle(title);
    };
    NativeListComponent.prototype.scrollToTop = function () {
        window.scrollTo(0, 0);
    };
    NativeListComponent = __decorate([
        core_1.Component({
            selector: 'native-list',
            templateUrl: 'app/ts/templates/lists/lists.component.html',
            providers: [post_service_1.PostService, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler, window_size_1.WindowSize, platform_browser_1.Title],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, router_1.ActivatedRoute, window_size_1.WindowSize, platform_browser_1.Title])
    ], NativeListComponent);
    return NativeListComponent;
}());
exports.NativeListComponent = NativeListComponent;
//# sourceMappingURL=native-list.component.js.map