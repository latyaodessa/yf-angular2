"use strict";
var Photo = (function () {
    function Photo(access_key, album_id, date, height, id, owner_id, photo_75, photo_130, photo_604, photo_807, photo_1280, photo_2560, text, user_id, width) {
        var _this = this;
        this.getPhoto_75 = function () { return _this.photo_75; };
        this.getPhoto_130 = function () { return _this.photo_130; };
        this.getPhoto_604 = function () { return _this.photo_604; };
        this.getPhoto_807 = function () { return _this.photo_807; };
        this.getPhoto_1280 = function () { return _this.photo_1280; };
        this.getPhoto_2560 = function () { return _this.photo_2560; };
        this.access_key = access_key;
        this.album_id = album_id;
        this.date = date;
        this.height = height;
        this.id = id;
        this.owner_id = owner_id;
        this.photo_75 = photo_75;
        this.photo_130 = photo_130;
        this.photo_604 = photo_604;
        this.photo_807 = photo_807;
        this.photo_1280 = photo_1280;
        this.photo_2560 = photo_2560;
        this.text = text;
        this.user_id = user_id;
        this.width = width;
    }
    return Photo;
}());
exports.Photo = Photo;
//# sourceMappingURL=photo.js.map