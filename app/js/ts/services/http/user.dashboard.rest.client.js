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
var http_1 = require('@angular/http');
var yf_user_handlers_1 = require('./../handlers/yf.user.handlers');
var UserDashboardRestClient = (function () {
    function UserDashboardRestClient(http, yFUserHandler) {
        this.http = http;
        this.yFUserHandler = yFUserHandler;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        this.savePostToDashboardPath = function () { return [setup_config_1.SetupConfig.YF_HOST, setup_config_1.SetupConfig.YF_MODULE, setup_config_1.SetupConfig.REST_BASIS,
            setup_config_1.SetupConfig.REST_PATH_USER, setup_config_1.SetupConfig.REST_METHOD_SAVE, setup_config_1.SetupConfig.REST_DASHBOARD_POST].join("/"); };
        this.deletePostFromDashboardPath = function (user_id, post_id) { return [setup_config_1.SetupConfig.YF_HOST, setup_config_1.SetupConfig.YF_MODULE, setup_config_1.SetupConfig.REST_BASIS,
            setup_config_1.SetupConfig.REST_PATH_USER, setup_config_1.SetupConfig.REST_METHOD_DELETE, setup_config_1.SetupConfig.REST_DASHBOARD_POST].join("/") + '/?' + setup_config_1.SetupConfig.REST_DASHBOARD_QUERY_PARAMETER_USER_ID + "=" + user_id + "&" + setup_config_1.SetupConfig.REST_DASHBOARD_QUERY_PARAMETER_POST_ID + "=" + post_id; };
        this.deletePhotoFromDashboardPath = function (user_id, photo_id) { return [setup_config_1.SetupConfig.YF_HOST, setup_config_1.SetupConfig.YF_MODULE, setup_config_1.SetupConfig.REST_BASIS,
            setup_config_1.SetupConfig.REST_PATH_USER, setup_config_1.SetupConfig.REST_METHOD_DELETE, setup_config_1.SetupConfig.REST_DASHBOARD_PHOTO].join("/") + '/?' + setup_config_1.SetupConfig.REST_DASHBOARD_QUERY_PARAMETER_USER_ID + "=" + user_id + "&" + setup_config_1.SetupConfig.REST_DASHBOARD_QUERY_PARAMETER_PHOTO_ID + "=" + photo_id; };
        this.isPostAlreadySavedToUserPath = function (user_id, post_id) { return [setup_config_1.SetupConfig.YF_HOST, setup_config_1.SetupConfig.YF_MODULE, setup_config_1.SetupConfig.REST_BASIS,
            setup_config_1.SetupConfig.REST_PATH_USER, setup_config_1.SetupConfig.REST_METHOD_SAVE, setup_config_1.SetupConfig.REST_DASHBOARD_POST].join("/") + '/' + user_id + '/' + post_id; };
        this.savePhotoToUserDashboardPath = function () { return [setup_config_1.SetupConfig.YF_HOST, setup_config_1.SetupConfig.YF_MODULE, setup_config_1.SetupConfig.REST_BASIS,
            setup_config_1.SetupConfig.REST_PATH_USER, setup_config_1.SetupConfig.REST_METHOD_SAVE, setup_config_1.SetupConfig.REST_DASHBOARD_PHOTO].join("/"); };
    }
    UserDashboardRestClient.prototype.savePostToUserDashboard = function (postForSave) {
        return this.http.post(this.savePostToDashboardPath(), postForSave, this.options)
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    };
    UserDashboardRestClient.prototype.savePhotoToUserDashboard = function (photoForSave) {
        return this.http.post(this.savePhotoToUserDashboardPath(), photoForSave, this.options)
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    };
    UserDashboardRestClient.prototype.isPostAlreadySavedToUser = function (user_id, post_id) {
        return this.http.get(this.isPostAlreadySavedToUserPath(user_id, post_id))
            .map(this.yFUserHandler.extractBoolean)
            .catch(this.yFUserHandler.handleError);
    };
    UserDashboardRestClient.prototype.deletePostById = function (user_id, post_id) {
        return this.http.delete(this.deletePostFromDashboardPath(user_id, post_id))
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    };
    UserDashboardRestClient.prototype.deletePhotoById = function (user_id, photo_id) {
        return this.http.delete(this.deletePhotoFromDashboardPath(user_id, photo_id))
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    };
    UserDashboardRestClient = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, yf_user_handlers_1.YFUserHandler])
    ], UserDashboardRestClient);
    return UserDashboardRestClient;
}());
exports.UserDashboardRestClient = UserDashboardRestClient;
//# sourceMappingURL=user.dashboard.rest.client.js.map