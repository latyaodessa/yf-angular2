"use strict";
var VKUserDetails = (function () {
    function VKUserDetails(first_name, last_name, sex, nickname, maiden_name, bdate, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, site, verified, followers_count, interests, music, activities, movies, books, games, about, quotes, city, country) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.sex = sex;
        this.nickname = nickname;
        this.maiden_name = maiden_name;
        this.bdate = bdate;
        this.photo_50 = photo_50;
        this.photo_100 = photo_100;
        this.photo_200_orig = photo_200_orig;
        this.photo_200 = photo_200;
        this.photo_400_orig = photo_400_orig;
        this.site = site;
        this.verified = verified;
        this.followers_count = followers_count;
        this.interests = interests;
        this.music = music;
        this.activities = activities;
        this.movies = movies;
        this.books = books;
        this.games = games;
        this.about = about;
        this.quotes = quotes;
        this.city = city;
        this.country = country;
    }
    return VKUserDetails;
}());
exports.VKUserDetails = VKUserDetails;
//# sourceMappingURL=vk.details.user.js.map