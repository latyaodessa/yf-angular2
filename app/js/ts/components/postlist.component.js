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
var post_new_native_component_1 = require('./post.new.native.component');
var post_new_sets_component_1 = require('./post.new.sets.component');
var post_top_native_component_1 = require('./post.top.native.component');
var post_top_sets_component_1 = require('./post.top.sets.component');
var platform_browser_1 = require('@angular/platform-browser');
var message_properties_1 = require('./../config/message.properties');
var PostlistComponent = (function () {
    function PostlistComponent(titleService) {
        this.titleService = titleService;
        this.setTitle(message_properties_1.MessageConfig.MAIN_TITLE);
    }
    PostlistComponent.prototype.setTitle = function (title) {
        this.titleService.setTitle(title);
    };
    PostlistComponent = __decorate([
        core_1.Component({
            selector: 'postlist',
            templateUrl: '/app/ts/templates/postlist.component.html',
            directives: [post_new_native_component_1.NewNativeComponent, post_new_sets_component_1.NewSetsComponent, post_top_native_component_1.NewTopNativeComponent, post_top_sets_component_1.NewTopSetsComponent],
            providers: [post_service_1.PostService, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler, platform_browser_1.Title]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title])
    ], PostlistComponent);
    return PostlistComponent;
}());
exports.PostlistComponent = PostlistComponent;
//# sourceMappingURL=postlist.component.js.map