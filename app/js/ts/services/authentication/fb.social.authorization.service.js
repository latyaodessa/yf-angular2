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
var FBSocialAuthorizationService = (function () {
    function FBSocialAuthorizationService() {
        this.loged = false;
        this.user = { name: 'Hello' };
    }
    FBSocialAuthorizationService.prototype.statusChangeCallback = function (response) {
        if (response.status === 'connected') {
            console.log('connected');
        }
        else {
            this.login();
        }
    };
    FBSocialAuthorizationService.prototype.authorizeWithFB = function () {
        var _this = this;
        FB.login(function (result) {
            _this.loged = true;
            _this.token = result;
            console.log(result);
            _this.me();
        }, { scope: 'user_friends' });
    };
    FBSocialAuthorizationService.prototype.me = function () {
        FB.api('/me?fields=id,first_name,last_name,gender,birthday,bio,email,hometown,languages,locale,location,timezone,website,picture.type(normal)', function (result) {
            if (result && !result.error) {
                this.user = result;
                console.log(this.user);
            }
            else {
                console.log(result.error);
            }
        });
    };
    FBSocialAuthorizationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FBSocialAuthorizationService);
    return FBSocialAuthorizationService;
}());
exports.FBSocialAuthorizationService = FBSocialAuthorizationService;
//# sourceMappingURL=fb.social.authorization.service.js.map