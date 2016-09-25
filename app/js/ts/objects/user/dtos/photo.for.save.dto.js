"use strict";
var PhotoForSave = (function () {
    function PhotoForSave(photo_url, user_id, date, note, ph, md, post_id) {
        this.photo_url = photo_url;
        this.user_id = user_id;
        this.date = date;
        this.note = note;
        this.ph = ph;
        this.md = md;
        this.post_id = post_id;
    }
    return PhotoForSave;
}());
exports.PhotoForSave = PhotoForSave;
//# sourceMappingURL=photo.for.save.dto.js.map