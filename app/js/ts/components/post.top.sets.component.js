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
var NewTopSetsComponent = (function () {
    function NewTopSetsComponent(postService) {
        var _this = this;
        this.postService = postService;
        this.postService.getYFSetsTop(0, 4).subscribe(function (data) {
            _this.posts = data;
        });
    }
    NewTopSetsComponent = __decorate([
        core_1.Component({
            selector: 'sets-top',
            templateUrl: 'app/ts/templates/post.new.top.component.html',
            providers: [post_service_1.PostService, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler],
            inputs: ['posts']
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], NewTopSetsComponent);
    return NewTopSetsComponent;
}());
exports.NewTopSetsComponent = NewTopSetsComponent;
//# sourceMappingURL=post.top.sets.component.js.map