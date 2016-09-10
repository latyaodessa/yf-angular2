"use strict";
var Video = (function () {
    function Video(access_key, can_add, comments, date, description, duration, id, owner_id, photo_130, photo_320, photo_640, title, views) {
        this.access_key = access_key;
        this.can_add = can_add;
        this.comments = comments;
        this.date = date;
        this.description = description;
        this.duration = duration;
        this.id = id;
        this.owner_id = owner_id;
        this.photo_130 = photo_130;
        this.photo_320 = photo_320;
        this.photo_640 = photo_640;
        this.title = title;
        this.views = views;
    }
    return Video;
}());
exports.Video = Video;
//# sourceMappingURL=video.js.map