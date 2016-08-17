"use strict";
var Post = (function () {
    function Post(id, date, from_id, text, signer_id, likes, reposts, postAudio, postPhoto, postVideo) {
        var _this = this;
        this.getId = function () { return _this.id; };
        this.getText = function () { return _this.text; };
        this.getLikes = function () { return _this.likes; };
        this.getPostPhoto = function () { return _this.postPhoto; };
        this.id = id;
        this.date = date;
        this.from_id = from_id;
        this.text = text;
        this.signer_id = signer_id;
        this.likes = likes;
        this.reposts = reposts;
        this.postAudio = postAudio;
        this.postPhoto = postPhoto;
        this.postVideo = postVideo;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map