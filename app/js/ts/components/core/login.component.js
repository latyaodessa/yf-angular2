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
var yf_user_handlers_1 = require('./../../services/handlers/yf.user.handlers');
var router_1 = require('@angular/router');
var authorization_service_1 = require('./../../services/authorization.service');
var vk_rest_client_1 = require('./../../services/http/vk.rest.client');
var message_properties_1 = require('./../../config/message.properties');
var setup_config_1 = require('./../../config/setup.config');
var elastic_user_client_service_1 = require('./../../services/http/elastic.user.client.service');
var LoginComponent = (function () {
    function LoginComponent(router, postService, route, authorizationService) {
        this.router = router;
        this.postService = postService;
        this.route = route;
        this.authorizationService = authorizationService;
        this.VK_BUTTON_TEXT = message_properties_1.MessageConfig.VK_BUTTON_TEXT;
    }
    LoginComponent.prototype.authorize = function () {
        window.location.href = setup_config_1.SetupConfig.VK_AUTHORIZATION_LINK;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/ts/templates/core/login.component.html',
            providers: [post_service_1.PostService, elastic_client_service_1.ElasticClient, elastic_user_client_service_1.ElasticUserClient, yf_post_handlers_1.YFPostHandler, yf_user_handlers_1.YFUserHandler, authorization_service_1.AuthorizationService, vk_rest_client_1.VKRestClient],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, post_service_1.PostService, router_1.ActivatedRoute, authorization_service_1.AuthorizationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map