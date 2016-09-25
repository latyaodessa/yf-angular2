"use strict";
var Observable_1 = require('rxjs/Observable');
var YFPostHandler = (function () {
    function YFPostHandler() {
    }
    YFPostHandler.prototype.extractData = function (res) {
        var _this = this;
        this.posts = [];
        res.json().hits.hits.forEach(function (entry) {
            _this.posts.push(entry._source);
        });
        return this.posts || {};
    };
    YFPostHandler.prototype.extractSinglePhotosData = function (res) {
        var _this = this;
        this.singlePhotoListDTO = [];
        res.json().hits.hits.forEach(function (entry) {
            _this.singlePhotoListDTO.push(entry._source);
        });
        return this.singlePhotoListDTO;
    };
    YFPostHandler.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead TO DO TO SERVER
        return Observable_1.Observable.throw(errMsg);
    };
    return YFPostHandler;
}());
exports.YFPostHandler = YFPostHandler;
//# sourceMappingURL=yf.post.handlers.js.map