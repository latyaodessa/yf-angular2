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
var core_1 = require('@angular/core');
var postlist_dto_1 = require('./../../objects/dtos/postlist.dto');
var PostListConverter = (function () {
    function PostListConverter() {
    }
    PostListConverter.prototype.checkPhoto = function (post) {
        //if(post.getPostPhoto()[0].getPhoto_604() != null){
        //    return post.getPostPhoto()[0].getPhoto_604();
        //} else if(post.getPostPhoto()[0].getPhoto_807() != null){
        //    return post.getPostPhoto()[0].getPhoto_807();
        //}
        console.log("HERE IS NULL");
        return null;
    };
    PostListConverter.prototype.toDto = function (posts) {
        for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
            var post = posts_1[_i];
            var photo = this.checkPhoto(post);
            if (photo != null) {
                this.postListDto.push(new postlist_dto_1.PostListDto(post.getId(), photo, post.getText(), post.getLikes()));
            }
        }
        return this.postListDto;
    };
    PostListConverter = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PostListConverter);
    return PostListConverter;
}());
exports.PostListConverter = PostListConverter;
//# sourceMappingURL=postlist.converter.js.map