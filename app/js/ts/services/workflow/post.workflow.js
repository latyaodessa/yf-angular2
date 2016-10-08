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
var setup_config_1 = require('./../../config/setup.config');
var PostWorkflow = (function () {
    function PostWorkflow() {
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
    PostWorkflow.prototype.postToPostListDTO = function (posts) {
        var postListDto = [];
        for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
            var post = posts_1[_i];
            if (post.postPhoto) {
                var text = this.cleanTag(post);
                if (setup_config_1.SetupConfig.TRANSLIT) {
                    postListDto.push(new postListDTO_1.PostListDTO(post.id, post.md_translit, post.ph_translit, text, this.findThumbnail(post)));
                }
                else {
                    postListDto.push(new postListDTO_1.PostListDTO(post.id, post.md, post.ph, text, this.findThumbnail(post)));
                }
            }
        }
        return postListDto;
    };
    PostWorkflow.prototype.cleanTag = function (post) {
        if (post.text && (!post.md || !post.ph)) {
            return post.text.replace(PostWorkflow.REGEX_CLEAN_TAG, "");
        }
        return post.text;
    };
    PostWorkflow.prototype.postToPostDetailsDTO = function (post) {
        var text = this.cleanTag(post);
        if (setup_config_1.SetupConfig.TRANSLIT) {
            return new postDetailsDTO_1.PostDetailsDTO(post.id, text, post.md_translit, post.ph_translit, null);
        }
        else {
            return new postDetailsDTO_1.PostDetailsDTO(post.id, text, post.md, post.ph, null);
        }
    };
    PostWorkflow.prototype.findSuggestedPosts = function (posts, currentPostId, size) {
        var postListDTO = [];
        for (var _i = 0, posts_2 = posts; _i < posts_2.length; _i++) {
            var post = posts_2[_i];
            if (post.id != currentPostId && postListDTO.length < size) {
                var text = this.cleanTag(post.text);
                if (setup_config_1.SetupConfig.TRANSLIT) {
                    postListDTO.push(new postListDTO_1.PostListDTO(post.id, post.md_translit, post.ph_translit, text, this.findThumbnail(post)));
                }
                else {
                    postListDTO.push(new postListDTO_1.PostListDTO(post.id, post.md, post.ph, text, this.findThumbnail(post)));
                }
            }
        }
        return postListDTO;
    };
    PostWorkflow.REGEX_CLEAN_TAG = /#.*@youngfolks/i;
    PostWorkflow = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PostWorkflow);
    return PostWorkflow;
}());
exports.PostWorkflow = PostWorkflow;
//# sourceMappingURL=post.workflow.js.map