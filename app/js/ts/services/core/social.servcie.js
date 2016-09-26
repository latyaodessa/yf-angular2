"use strict";
var message_properties_1 = require('./../../config/message.properties');
var SocialService = (function () {
    function SocialService() {
        this.DESCRIPTION_ADDITON = message_properties_1.MessageConfig.DESCRIPTION_ADDITON;
    }
    SocialService.prototype.initData = function () {
        //this.URL = document.URL;
        this.URL = "http://youngfolks.ru";
        this.TITLE = document.title;
    };
    SocialService.prototype.getVkShareLink = function (img) {
        this.initData();
        return "http://vk.com/share.php" +
            "?url=" + this.URL +
            "&title=" + this.TITLE +
            "&description=" + this.TITLE + " - " + this.DESCRIPTION_ADDITON +
            "&image=" + img +
            "&noparse=true";
    };
    SocialService.prototype.getFbShareLink = function (img) {
        this.initData();
        FB.ui({
            method: 'feed',
            link: this.URL,
            picture: img,
            caption: this.TITLE,
            description: this.TITLE + " - " + this.DESCRIPTION_ADDITON
        });
    };
    SocialService.prototype.getTumblrLink = function () {
        this.initData();
        return 'http://www.tumblr.com/share?v=3' +
            '&u=' + this.URL +
            '&t=' + this.TITLE;
    };
    return SocialService;
}());
exports.SocialService = SocialService;
//# sourceMappingURL=social.servcie.js.map