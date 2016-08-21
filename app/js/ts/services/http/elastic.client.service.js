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
var ElasticClient = (function () {
    function ElasticClient() {
        var _this = this;
        this.getSize = function (size) { return '&size=' + size; };
        this.getFrom = function (from) { return '&from=' + from; };
        this.getNewYFNative = function (from, size) { return ElasticClient.NATIVE_INDEX + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_ID; };
        this.getNewYFSets = function (from, size) { return ElasticClient.SETS_INDEX + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_ID; };
        this.getYFNativeTop = function (from, size) { return ElasticClient.NATIVE_TOP_INDEX + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_LIKES; };
        this.getYFSetsTop = function (from, size) { return ElasticClient.SETS_TOP_INDEX + _this.getFrom(from) + _this.getSize(size) + ElasticClient.DESC_BY_LIKES; };
        this.findNativeById = function (id) { return ElasticClient.NATIVE_SETS_INDEX + ElasticClient.SEARCH_BY_ID + id; };
    }
    ElasticClient.HOST = 'http://10.0.0.37:9200/';
    ElasticClient.NATIVE_INDEX = ElasticClient.HOST + 'yf-photo-native/_search?';
    ElasticClient.SETS_INDEX = ElasticClient.HOST + 'yf-photo-sets/_search?';
    ElasticClient.NATIVE_TOP_INDEX = ElasticClient.HOST + 'yf-native-top/_search?';
    ElasticClient.SETS_TOP_INDEX = ElasticClient.HOST + 'yf-sets-top/_search?';
    ElasticClient.NATIVE_SETS_INDEX = ElasticClient.HOST + 'yf-photo-native,yf-photo-sets/_search?';
    ElasticClient.SEARCH_BY_ID = 'q=_id:';
    ElasticClient.DESC_BY_ID = '&sort=id:desc';
    ElasticClient.DESC_BY_LIKES = '&sort=likes:desc';
    ElasticClient = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ElasticClient);
    return ElasticClient;
}());
exports.ElasticClient = ElasticClient;
//# sourceMappingURL=elastic.client.service.js.map