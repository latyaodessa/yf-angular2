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
var router_1 = require('@angular/router');
var authorization_service_1 = require('./../../services/authorization.service');
var message_properties_1 = require('./../../config/message.properties');
var setup_config_1 = require('./../../config/setup.config');
var fb_rest_client_1 = require('./../../services/http/fb.rest.client');
var yf_user_handlers_1 = require('./../../services/handlers/yf.user.handlers');
var fb_social_authorization_service_1 = require('./../../services/authorization/fb.social.authorization.service');
var storage_service_1 = require('./../../services/authorization/storage.service');
var LoginComponent = (function () {
    function LoginComponent(fBSocialAuthorizationService, storageService, router) {
        this.fBSocialAuthorizationService = fBSocialAuthorizationService;
        this.storageService = storageService;
        this.router = router;
        this.VK_BUTTON_TEXT = message_properties_1.MessageConfig.VK_BUTTON_TEXT;
        this.FB_BUTTON_TEXT = message_properties_1.MessageConfig.FB_BUTTON_TEXT;
    }
    LoginComponent.prototype.authorizeWithVK = function () {
        window.location.href = setup_config_1.SetupConfig.VK_AUTHORIZATION_LINK;
    };
    LoginComponent.prototype.authorizeWithFB = function () {
        this.fBSocialAuthorizationService.authorizeWithFB();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/ts/templates/core/login.component.html',
            providers: [fb_social_authorization_service_1.FBSocialAuthorizationService, authorization_service_1.AuthorizationService, fb_rest_client_1.FBRestClient, yf_user_handlers_1.YFUserHandler, storage_service_1.StorageService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [fb_social_authorization_service_1.FBSocialAuthorizationService, storage_service_1.StorageService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map