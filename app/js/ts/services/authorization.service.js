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
var yf_user_handlers_1 = require('./handlers/yf.user.handlers');
var vk_rest_client_1 = require('./http/vk.rest.client');
var setup_config_1 = require('./../config/setup.config');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var elastic_user_client_service_1 = require('./http/elastic.user.client.service');
var AuthorizationService = (function () {
    function AuthorizationService(http, elasticClient, yFUserHandler, vkRestClient, elasticUserClient) {
        this.http = http;
        this.elasticClient = elasticClient;
        this.yFUserHandler = yFUserHandler;
        this.vkRestClient = vkRestClient;
        this.elasticUserClient = elasticUserClient;
    }
    AuthorizationService.prototype.getToken = function () {
        return this.params.match(/^(.*?)&/)[1].replace('#access_token=', '');
    };
    AuthorizationService.prototype.getExpiresTime = function () {
        return this.params.match(/expires_in=([0-9]*)/)[1].replace('expires_in=', '');
    };
    AuthorizationService.prototype.getUserId = function () {
        return this.params.match(/user_id=([0-9]*)/)[1].replace('user_id=', '');
    };
    AuthorizationService.prototype.authorizeUser = function (prams, from) {
        var _this = this;
        this.params = prams;
        this.getGeneralUserDataById(this.getUserId()).subscribe(function (user) {
            if (user) {
                _this.generalUser = user;
                _this.setLocalStorageGeneralUser();
                _this.defineUserType(from);
            }
            else {
                _this.createNewVKUser(_this.getUserId()).subscribe(function (vkUser) {
                    _this.generalUser = vkUser;
                    _this.setLocalStorageGeneralUser();
                    _this.defineUserType(from);
                });
            }
        });
    };
    AuthorizationService.prototype.defineUserType = function (from) {
        if (from == 'vk') {
            console.log(from);
            this.setLocalStorageVKUser();
        }
    };
    AuthorizationService.prototype.setLocalStorageGeneralUser = function () {
        localStorage.clear();
        localStorage.setItem(setup_config_1.SetupConfig.TOKEN_KEY_NAME, this.getToken());
        localStorage.setItem(setup_config_1.SetupConfig.EXPIRES_IN_NAME, this.getExpiresTime());
        localStorage.setItem(setup_config_1.SetupConfig.USER_ID_NAME, this.getUserId());
        localStorage.setItem(setup_config_1.SetupConfig.USER_TYPE_NAME, this.generalUser.type);
    };
    AuthorizationService.prototype.setLocalStorageVKUser = function () {
        this.getVKUserDetailsByIdELASTIC(this.getUserId()).subscribe(function (vkUser) {
            var vKUserDetails = vkUser[0];
            localStorage.setItem(setup_config_1.SetupConfig.FIRST_NAME_KEY_NAME, vKUserDetails.first_name);
            localStorage.setItem(setup_config_1.SetupConfig.LAST_NAME_KEY_NAME, vKUserDetails.last_name);
            localStorage.setItem(setup_config_1.SetupConfig.PHOTO_50_KEY_NAME, vKUserDetails.photo_50);
        });
    };
    AuthorizationService.prototype.getGeneralUserDataById = function (userId) {
        return this.http.get(this.vkRestClient.getGeneralUserById(userId))
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    };
    AuthorizationService.prototype.getVKUserDetailsByIdELASTIC = function (userId) {
        return this.http.get(this.elasticUserClient.findVKUserById(userId))
            .map(this.yFUserHandler.extractDataFromElastic)
            .catch(this.yFUserHandler.handleError);
    };
    AuthorizationService.prototype.createNewVKUser = function (userId) {
        return this.http.post(this.vkRestClient.createNewVKUser(userId))
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    };
    AuthorizationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, elastic_client_service_1.ElasticClient, yf_user_handlers_1.YFUserHandler, vk_rest_client_1.VKRestClient, elastic_user_client_service_1.ElasticUserClient])
    ], AuthorizationService);
    return AuthorizationService;
}());
exports.AuthorizationService = AuthorizationService;
//# sourceMappingURL=authorization.service.js.map