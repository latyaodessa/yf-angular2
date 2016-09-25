"use strict";
var PostForSave = (function () {
    function PostForSave(post_id, user_id, date, post_type) {
        this.post_id = post_id;
        this.user_id = user_id;
        this.date = date;
        this.post_type = post_type;
    }
    return PostForSave;
}());
exports.PostForSave = PostForSave;
//# sourceMappingURL=post.for.save.dto.js.map