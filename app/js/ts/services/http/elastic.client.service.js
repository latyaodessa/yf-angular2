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
var setup_config_1 = require('./../../config/setup.config');
var ElasticClient = (function () {
    function ElasticClient() {
        var _this = this;
        this.getSize = function (size) { return '&size=' + size; };
        this.getFrom = function (from) { return '&from=' + from; };
        this.getNewYFNative = function (from, size) { return ElasticClient.NATIVE_INDEX + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_ID; };
        this.getNewYFArt = function (from, size) { return ElasticClient.ART_INDEX + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_ID; };
        this.getArtExternal = function (from, size) { return ElasticClient.EXTERNAL_ART_INDEX + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_ID; };
        this.getNewYFSets = function (from, size) { return ElasticClient.SETS_INDEX + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_ID; };
        this.getYFSilhouettesNew = function (from, size) { return ElasticClient.SILHOUETTES_INDEX + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_ID; };
        this.getYFSetsNativeNew = function (from, size) { return ElasticClient.SEARCH_ALL_INDEX + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_ID; };
        this.getYFNativeTop = function (from, size) { return ElasticClient.NATIVE_TOP_INDEX + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_LIKES; };
        this.getYFSetsTop = function (from, size) { return ElasticClient.SETS_TOP_INDEX + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_LIKES; };
        this.findPostById = function (id) { return ElasticClient.SEARCH_ALL_INDEX + ElasticClient.SEARCH_BY_ID + id; };
        this.findByText = function (from, size, textQuery) { return ElasticClient.SEARCH_ALL_INDEX + ElasticClient.SEARCH_BY_TEXT + textQuery; };
        //User Dashboard
        this.getSavedUserPosts = function (from, size, userId) { return ElasticClient.USER_SAVED_POSTS_INDEX + ElasticClient.SEARCH_BY_USER_ID + userId + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_DATE; };
        this.getSavedUserPhotos = function (from, size, userId) { return ElasticClient.USER_SAVED_PHOTOS_INDEX + ElasticClient.SEARCH_BY_USER_ID + userId + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_DATE; };
    }
    //public static HOST:string = 'http://raspberrypi.local:9200/';
    ElasticClient.HOST = setup_config_1.SetupConfig.ELASTIC_HOST;
    ElasticClient.NATIVE_INDEX = ElasticClient.HOST + 'yf-photo-native/_search?';
    ElasticClient.EXTERNAL_ART_INDEX = ElasticClient.HOST + 'external-art/_search?';
    ElasticClient.ART_INDEX = ElasticClient.HOST + 'yf-photo-art/_search?';
    ElasticClient.SETS_INDEX = ElasticClient.HOST + 'yf-photo-sets/_search?';
    ElasticClient.SILHOUETTES_INDEX = ElasticClient.HOST + 'yf-photo-silhouettes/_search?';
    //Dashboard
    ElasticClient.USER_SAVED_POSTS_INDEX = ElasticClient.HOST + 'user-saved-post/_search?';
    ElasticClient.USER_SAVED_PHOTOS_INDEX = ElasticClient.HOST + 'user-saved-photo/_search?';
    ElasticClient.NATIVE_TOP_INDEX = ElasticClient.HOST + 'yf-native-top/_search?';
    ElasticClient.SETS_TOP_INDEX = ElasticClient.HOST + 'yf-sets-top/_search?';
    ElasticClient.SEARCH_ALL_INDEX = ElasticClient.HOST + '/_search?';
    ElasticClient.SEARCH_BY_ID = 'q=_id:';
    ElasticClient.SEARCH_BY_TEXT = '&q=text:';
    ElasticClient.SEARCH_BY_USER_ID = '&q=user_id:';
    ElasticClient.DESC_BY_ID = '&sort=id:desc';
    ElasticClient.DESC_BY_LIKES = '&sort=likes:desc';
    ElasticClient.DESC_BY_DATE = '&sort=date:desc';
    ElasticClient = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ElasticClient);
    return ElasticClient;
}());
exports.ElasticClient = ElasticClient;
//# sourceMappingURL=elastic.client.service.js.map