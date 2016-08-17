"use strict";
var post_1 = require('./../objects/classes/post');
require('rxjs/add/operator/map');
// import {Http, Headers, HTTP_PROVIDERS, URLSearchParams} from '@angular/http';
var PostService = (function () {
    function PostService() {
    }
    PostService.prototype.getPosts = function () {
        return [new post_1.Post(123, "date", "from id")];
    };
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.services.js.map