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
var yf_user_handlers_1 = require('./handlers/yf.user.handlers');
var vk_rest_client_1 = require('./http/vk.rest.client');
var setup_config_1 = require('./../config/setup.config');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var elastic_user_client_service_1 = require('./http/elastic.user.client.service');
var user_workflow_1 = require('./workflow/user.workflow');
var storage_service_1 = require('./authorization/storage.service');
var AuthorizationService = (function () {
    function AuthorizationService(http, yFUserHandler, vkRestClient, elasticUserClient, userWorkflow, storageService) {
        this.http = http;
        this.yFUserHandler = yFUserHandler;
        this.vkRestClient = vkRestClient;
        this.elasticUserClient = elasticUserClient;
        this.userWorkflow = userWorkflow;
        this.storageService = storageService;
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
                _this.getVKUserDetailsByIdELASTIC(_this.generalUser.id).subscribe(function (vkUser) {
                    _this.vKUserDetails = vkUser;
                    _this.setSessionLocalStorageGeneralUser();
                    _this.defineUserType(from);
                    _this.storeUserDataInStorage();
                });
            }
            else {
                _this.createNewVKUser(_this.getUserId()).subscribe(function (vkUser) {
                    _this.vKUserDetails = vkUser;
                    _this.generalUser = _this.userWorkflow.vkUserToGeneralUser(_this.vKUserDetails.id);
                    _this.setSessionLocalStorageGeneralUser();
                    _this.defineUserType(from);
                    _this.storeUserDataInStorage();
                });
            }
        });
    };
    AuthorizationService.prototype.storeUserDataInStorage = function () {
        this.storageService.checkIsUserLoggedIn();
        this.storageService.getVkUserDTO();
    };
    AuthorizationService.prototype.defineUserType = function (from) {
        if (from == 'vk') {
            this.setLocalStorageVKUser();
        }
    };
    AuthorizationService.prototype.setSessionLocalStorageGeneralUser = function () {
        localStorage.clear();
        sessionStorage.clear();
        sessionStorage.setItem(setup_config_1.SetupConfig.TOKEN_KEY_NAME, this.getToken());
        sessionStorage.setItem(setup_config_1.SetupConfig.EXPIRES_IN_NAME, this.getExpiresTime());
        localStorage.setItem(setup_config_1.SetupConfig.USER_ID_NAME, this.getUserId());
        localStorage.setItem(setup_config_1.SetupConfig.USER_TYPE_NAME, this.generalUser.type);
    };
    AuthorizationService.prototype.setLocalStorageVKUser = function () {
        localStorage.setItem(setup_config_1.SetupConfig.FIRST_NAME_KEY_NAME, this.vKUserDetails.first_name);
        localStorage.setItem(setup_config_1.SetupConfig.LAST_NAME_KEY_NAME, this.vKUserDetails.last_name);
        localStorage.setItem(setup_config_1.SetupConfig.THUMBNAIL, this.vKUserDetails.photo_200);
        window.location.href = '/dashboard';
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
        return this.http.post(this.vkRestClient.createNewVKUser(userId), "")
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    };
    AuthorizationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, yf_user_handlers_1.YFUserHandler, vk_rest_client_1.VKRestClient, elastic_user_client_service_1.ElasticUserClient, user_workflow_1.UserWorkflow, storage_service_1.StorageService])
    ], AuthorizationService);
    return AuthorizationService;
}());
exports.AuthorizationService = AuthorizationService;
//# sourceMappingURL=authorization.service.js.map