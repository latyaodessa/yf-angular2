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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var carousel_1 = require('ng2-bootstrap/components/carousel');
var router_1 = require('@angular/router');
var message_properties_1 = require('./../config/message.properties');
var setup_config_1 = require('./../config/setup.config');
var NewTopSetsComponent = (function () {
    function NewTopSetsComponent(postService) {
        this.postService = postService;
        this.title = message_properties_1.MessageConfig.WEEKLY_TOP_SETS;
        this.show_all_pics = message_properties_1.MessageConfig.SHOW_ALL_PICS;
        this.single_route = setup_config_1.SetupConfig.SINGLE_POST_ROUTE;
    }
    NewTopSetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.postService.getYFSetsTop(0, 5).subscribe(function (data) {
            _this.postListDTO = _this.postService.postToPostListDTO(data);
        });
    };
    NewTopSetsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewTopSetsComponent = __decorate([
        core_1.Component({
            selector: 'sets-top',
            templateUrl: 'app/ts/templates/post.new.top.component.html',
            providers: [post_service_1.PostService, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler],
            directives: [carousel_1.CAROUSEL_DIRECTIVES, common_1.CORE_DIRECTIVES, forms_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            inputs: ['posts']
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], NewTopSetsComponent);
    return NewTopSetsComponent;
}());
exports.NewTopSetsComponent = NewTopSetsComponent;
//# sourceMappingURL=post.top.sets.component.js.map