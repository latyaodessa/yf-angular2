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
var vk_rest_client_1 = require('./http/vk.rest.client');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var AuthorizationService = (function () {
    function AuthorizationService(http, elasticClient, yfPostHandler, postWorkflow, vkRestClient) {
        this.http = http;
        this.elasticClient = elasticClient;
        this.yfPostHandler = yfPostHandler;
        this.postWorkflow = postWorkflow;
        this.vkRestClient = vkRestClient;
    }
    AuthorizationService.prototype.getToken = function () {
        return this.params.match(/^(.*?)&/)[1].replace('#access_token=', '');
    };
    AuthorizationService.prototype.getExpiresTime = function (inquiry) {
        return this.params.match(/expires_in=([0-9]*)/)[1].replace('expires_in=', '');
    };
    AuthorizationService.prototype.getUserId = function (inquiry) {
        return this.params.match(/user_id=([0-9]*)/)[1].replace('user_id=', '');
    };
    AuthorizationService.prototype.authorizeUser = function (prams) {
        this.params = prams;
        //    this.getGeneralUserDataById(this.getUserId(prams)).subscribe( user  => {
        //            console.log(user);
        //        }
        //)
    };
    AuthorizationService.prototype.getUserDataById = function (userId) {
        var headers = new http_1.Headers();
        var options = new http_1.RequestOptions({
            headers: headers
        });
        return this.http.get(this.vkRestClient.getGeneralUserDataById(userId), options)
            .map(function (res) { return res.json(); })
            .catch(this.yfPostHandler.handleError);
    };
    AuthorizationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, elastic_client_service_1.ElasticClient, yf_post_handlers_1.YFPostHandler, post_workflow_1.PostWorkflow, vk_rest_client_1.VKRestClient])
    ], AuthorizationService);
    return AuthorizationService;
}());
exports.AuthorizationService = AuthorizationService;
//# sourceMappingURL=authorization.service.js.map