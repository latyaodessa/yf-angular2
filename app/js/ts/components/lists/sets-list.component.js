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
var SetsListComponent = (function () {
    function SetsListComponent(postService, route, windowSize) {
        this.postService = postService;
        this.route = route;
        this.windowSize = windowSize;
        this.tag = 'sets';
    }
    SetsListComponent.prototype.ngOnInit = function () {
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
    SetsListComponent.prototype.getPosts = function (size) {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['page']) {
                _this.page = parseInt(params['page']);
            }
            else {
                _this.page = 1;
            }
            var from = (_this.page - 1) * size;
            _this.sub = _this.postService.getYFSetsNew(from, size).subscribe(function (data) {
                _this.postListDTO = _this.postService.postToPostListDTO(data);
                _this.postsLength = _this.postListDTO.length;
            });
        });
    };
    SetsListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    SetsListComponent = __decorate([
        core_1.Component({
            selector: 'native-list',
            templateUrl: 'app/ts/templates/lists/lists.component.html',
            providers: [post_service_1.PostService, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler, window_size_1.WindowSize],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, router_1.ActivatedRoute, window_size_1.WindowSize])
    ], SetsListComponent);
    return SetsListComponent;
}());
exports.SetsListComponent = SetsListComponent;
//# sourceMappingURL=sets-list.component.js.map