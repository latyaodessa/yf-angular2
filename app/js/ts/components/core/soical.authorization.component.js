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
var elastic_user_client_service_1 = require('./../../services/http/elastic.user.client.service');
var yf_user_handlers_1 = require('./../../services/handlers/yf.user.handlers');
var yf_post_handlers_1 = require('./../../services/handlers/yf.post.handlers');
var router_1 = require('@angular/router');
var authorization_service_1 = require('./../../services/authorization.service');
var vk_rest_client_1 = require('./../../services/http/vk.rest.client');
var SocialAuthorizationComponent = (function () {
    function SocialAuthorizationComponent(router, postService, route, authorizationService) {
        this.router = router;
        this.postService = postService;
        this.route = route;
        this.authorizationService = authorizationService;
        var from;
        this.route.params.subscribe(function (routeParams) { return from = routeParams['from']; });
        var fragment = router.routerState.fragment;
        fragment.subscribe(function (params) {
            authorizationService.authorizeUser(window.location.hash, from);
        });
    }
    SocialAuthorizationComponent.prototype.ngOnInit = function () {
        //this.route.params.subscribe(params => {
        //    console.log(params['access']);
        //})
    };
    SocialAuthorizationComponent.prototype.ngOnDestroy = function () {
    };
    SocialAuthorizationComponent = __decorate([
        core_1.Component({
            selector: 'authorization',
            templateUrl: 'app/ts/templates/core/social.authorization.component.html',
            providers: [post_service_1.PostService, elastic_client_service_1.ElasticClient, elastic_user_client_service_1.ElasticUserClient, yf_user_handlers_1.YFUserHandler, yf_post_handlers_1.YFPostHandler, authorization_service_1.AuthorizationService, vk_rest_client_1.VKRestClient],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, post_service_1.PostService, router_1.ActivatedRoute, authorization_service_1.AuthorizationService])
    ], SocialAuthorizationComponent);
    return SocialAuthorizationComponent;
}());
exports.SocialAuthorizationComponent = SocialAuthorizationComponent;
//# sourceMappingURL=soical.authorization.component.js.map