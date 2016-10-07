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
var elastic_client_service_1 = require('./http/elastic.client.service');
var yf_post_handlers_1 = require('./handlers/yf.post.handlers');
var post_workflow_1 = require('./workflow/post.workflow');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var PostService = (function () {
    function PostService(http, elasticClient, yfPostHandler, postWorkflow) {
        this.http = http;
        this.elasticClient = elasticClient;
        this.yfPostHandler = yfPostHandler;
        this.postWorkflow = postWorkflow;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    PostService.prototype.findYFPostById = function (id) {
        return this.http.get(this.elasticClient.findPostById(id))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    PostService.prototype.getYFNativeNew = function (from, size) {
        return this.http.get(this.elasticClient.getNewYFNative(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    PostService.prototype.getYFArtNew = function (from, size) {
        return this.http.get(this.elasticClient.getNewYFArt(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    PostService.prototype.getYFArtExternal = function (from, size) {
        return this.http.get(this.elasticClient.getArtExternal(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    PostService.prototype.getYFNativeTop = function (from, size) {
        return this.http.get(this.elasticClient.getYFNativeTop(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    PostService.prototype.loadMoreNative = function (from, to) {
        return this.http.get(this.elasticClient.getNewYFNative(from, to))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    //Categories LISTS
    PostService.prototype.getYFSilhouettesNew = function (from, size) {
        return this.http.get(this.elasticClient.getYFSilhouettesNew(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    PostService.prototype.getYFSetsNew = function (from, size) {
        return this.http.get(this.elasticClient.getNewYFSets(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    PostService.prototype.getYFSetsNativeNew = function (from, size) {
        return this.http.get(this.elasticClient.getYFSetsNativeNew(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    PostService.prototype.getYFSetsTop = function (from, size) {
        return this.http.get(this.elasticClient.getYFSetsTop(from, size))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    PostService.prototype.loadMoreSets = function (from, to) {
        return this.http.get(this.elasticClient.getNewYFSets(from, to))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    PostService.prototype.findPhotosForPostDetails = function (post) {
        return this.postWorkflow.findPhotosForPostDetails(post);
    };
    PostService.prototype.postToPostListDTO = function (posts) {
        return this.postWorkflow.postToPostListDTO(posts);
    };
    PostService.prototype.loadMoreSavedPost = function (from, to) {
        return this.http.get(this.elasticClient.getNewYFNative(from, to))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    PostService.prototype.getAllPostIdsFromSavedPost = function (savedPosts) {
        var post_ids = [];
        for (var _i = 0, savedPosts_1 = savedPosts; _i < savedPosts_1.length; _i++) {
            var saved = savedPosts_1[_i];
            post_ids.push(saved.post_id);
        }
        return post_ids;
    };
    PostService.prototype.getPostsByMultipleIds = function (savedPosts) {
        var body;
        var ids = this.getAllPostIdsFromSavedPost(savedPosts);
        body = JSON.stringify({ query: { constant_score: { filter: { terms: { id: ids } } } } }, null, ' ');
        return this.http.post(elastic_client_service_1.ElasticClient.SEARCH_ALL_INDEX, body, this.options)
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler, post_workflow_1.PostWorkflow])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map