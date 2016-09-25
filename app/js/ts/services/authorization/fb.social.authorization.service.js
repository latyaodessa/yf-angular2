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
var content_properties_1 = require('./../../config/content.properties');
var fb_rest_client_1 = require('./../../services/http/fb.rest.client');
var setup_config_1 = require('./../../config/setup.config');
var FBSocialAuthorizationService = (function () {
    function FBSocialAuthorizationService(fbRestClient) {
        this.fbRestClient = fbRestClient;
    }
    FBSocialAuthorizationService.prototype.authorizeWithFB = function () {
        var _this = this;
        FB.login(function (status) {
            _this.accessToken = status.authResponse.accessToken;
            _this.expiresIn = status.authResponse.expiresIn;
            _this.me();
        });
    };
    FBSocialAuthorizationService.prototype.me = function () {
        var _this = this;
        FB.api('/me?fields=' + content_properties_1.ContentProperties.FB_REQUESTED_FIELDS.join(','), function (result) {
            if (result && !result.error) {
                _this.authorizeFBUser(result);
            }
            else {
                console.log(result.error);
            }
        });
    };
    FBSocialAuthorizationService.prototype.authorizeFBUser = function (result) {
        var _this = this;
        this.fbRestClient.getGeneralUserDataById(result.id).subscribe(function (generalUser) {
            if (!generalUser) {
                _this.createNewFBUser(result);
            }
            else {
                _this.setSessionLocalStorageGeneralUser(result);
            }
        });
    };
    FBSocialAuthorizationService.prototype.createNewFBUser = function (result) {
        var _this = this;
        this.fbRestClient.createNewFBUser(result).subscribe(function (fbUser) {
            _this.setSessionLocalStorageGeneralUser(fbUser);
        });
    };
    FBSocialAuthorizationService.prototype.setSessionLocalStorageGeneralUser = function (result) {
        localStorage.clear();
        sessionStorage.clear();
        sessionStorage.setItem(setup_config_1.SetupConfig.TOKEN_KEY_NAME, this.accessToken);
        sessionStorage.setItem(setup_config_1.SetupConfig.EXPIRES_IN_NAME, this.expiresIn);
        localStorage.setItem(setup_config_1.SetupConfig.USER_ID_NAME, result.id);
        localStorage.setItem(setup_config_1.SetupConfig.USER_TYPE_NAME, "fb");
        localStorage.setItem(setup_config_1.SetupConfig.FIRST_NAME_KEY_NAME, result.first_name);
        localStorage.setItem(setup_config_1.SetupConfig.LAST_NAME_KEY_NAME, result.last_name);
        localStorage.setItem(setup_config_1.SetupConfig.THUMBNAIL, result.picture.data.url);
        window.location.href = '/dashboard';
    };
    FBSocialAuthorizationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [fb_rest_client_1.FBRestClient])
    ], FBSocialAuthorizationService);
    return FBSocialAuthorizationService;
}());
exports.FBSocialAuthorizationService = FBSocialAuthorizationService;
//# sourceMappingURL=fb.social.authorization.service.js.map