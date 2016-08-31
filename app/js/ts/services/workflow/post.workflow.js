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
var postDetailsDTO_1 = require('./../../objects/dtos/postDetailsDTO');
var postListDTO_1 = require('./../../objects/dtos/postListDTO');
var core_1 = require('@angular/core');
var PostWorkflow = (function () {
    function PostWorkflow() {
        this.regexTag = /^[^_]*@youngfolks/;
        this.newLine = '\n';
        this.regexIdbrackets = /\[id\d+\|/g;
        this.regexClubbrackets = /\[club\d+\|/g;
        this.backBracket = /\]/g;
        this.regexWebSite = /(faceb(.*?)+$)|(www\.(.*?)+$)|(http:.(.*?)+$)|(http:.(.*?)+$)|(instag.(.*?)+$)/g;
        this.phRegex = /(Ph:.*)|(Ph.*)/i;
        this.mdRegex = /(Md:.*)|(Md.*)/i;
    }
    PostWorkflow.prototype.findPhotosForPostDetails = function (post) {
        var photos = [];
        post.postPhoto.forEach(function (photo) {
            if (photo.photo_2560)
                photos.push(photo.photo_2560);
            else if (photo.photo_1280)
                photos.push(photo.photo_1280);
            else if (photo.photo_807)
                photos.push(photo.photo_807);
            else if (photo.photo_604)
                photos.push(photo.photo_604);
        });
        return photos;
    };
    PostWorkflow.prototype.findThumbnail = function (post) {
        var photo = post.postPhoto[0];
        if (photo.photo_604)
            return photo.photo_604;
        else if (photo.photo_807)
            return photo.photo_807;
        else if (photo.photo_1280)
            return photo.photo_1280;
        return null;
    };
    PostWorkflow.prototype.regexPostText = function (post) {
        var postDetailsDTO = new postDetailsDTO_1.PostDetailsDTO();
        postDetailsDTO.id = post.id;
        var cleanText = this.getCleanText(post.text);
        postDetailsDTO.text = cleanText;
        postDetailsDTO.ph = this.getPh(cleanText);
        postDetailsDTO.md = this.getMd(cleanText);
        return postDetailsDTO;
    };
    PostWorkflow.prototype.getCleanText = function (text) {
        return text.replace(this.regexTag, "").replace(this.regexIdbrackets, "").replace(this.regexClubbrackets, "").replace(this.backBracket, "").replace(this.regexWebSite, "");
    };
    PostWorkflow.prototype.getPh = function (cleanText) {
        var phText = this.phRegex.exec(cleanText.replace(":", ""));
        if (phText) {
            return phText[0].replace(/ph/gi, "").replace(":", "").trim();
        }
        else
            return null;
    };
    PostWorkflow.prototype.getMd = function (cleanText) {
        var mdText = this.mdRegex.exec(cleanText.replace(":", ""));
        if (mdText) {
            return mdText[0].replace(/md/gi, "").replace(":", "").trim();
        }
        else
            return null;
    };
    PostWorkflow.prototype.postToPostListDTO = function (posts) {
        var postListDto = [];
        for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
            var post = posts_1[_i];
            var cleanText = this.getCleanText(post.text);
            postListDto.push(new postListDTO_1.PostListDTO(post.id, this.getMd(cleanText), this.getPh(cleanText), this.findThumbnail(post)));
        }
        return postListDto;
    };
    PostWorkflow.prototype.findSuggestedPosts = function (posts, currentPostId) {
        var postListDTO = [];
        for (var _i = 0, posts_2 = posts; _i < posts_2.length; _i++) {
            var post = posts_2[_i];
            if (post.id != currentPostId && postListDTO.length < 4) {
                var cleanText = this.getCleanText(post.text);
                postListDTO.push(new postListDTO_1.PostListDTO(post.id, this.getMd(cleanText), this.getPh(cleanText), this.findThumbnail(post)));
            }
        }
        return postListDTO;
    };
    PostWorkflow = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PostWorkflow);
    return PostWorkflow;
}());
exports.PostWorkflow = PostWorkflow;
//# sourceMappingURL=post.workflow.js.map