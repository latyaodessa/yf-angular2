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
var message_properties_1 = require('./../../config/message.properties');
var core_1 = require('@angular/core');
var SocialService = (function () {
    function SocialService() {
        this.DESCRIPTION_ADDITON = message_properties_1.MessageConfig.DESCRIPTION_ADDITON;
    }
    SocialService.prototype.getVkShareLink = function (img) {
        return "http://vk.com/share.php" +
            "?url=" + document.URL +
            "&title=" + document.title +
            "&description=" + document.title + " - " + this.DESCRIPTION_ADDITON +
            "&image=" + img +
            "&noparse=true";
    };
    SocialService.prototype.getFbShareLink = function (img) {
        FB.ui({
            method: 'feed',
            link: document.URL,
            picture: img,
            caption: document.title,
            description: document.title + " - " + this.DESCRIPTION_ADDITON
        });
    };
    SocialService.prototype.getTumblrLink = function () {
        return 'http://www.tumblr.com/share?v=3' +
            '&u=' + document.URL +
            '&t=' + document.title;
    };
    SocialService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SocialService);
    return SocialService;
}());
exports.SocialService = SocialService;
//# sourceMappingURL=social.servcie.js.map