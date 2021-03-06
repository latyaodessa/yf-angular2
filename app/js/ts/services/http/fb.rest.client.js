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
var yf_user_handlers_1 = require('./../handlers/yf.user.handlers');
var http_1 = require('@angular/http');
var FBRestClient = (function () {
    function FBRestClient(http, yFUserHandler) {
        this.http = http;
        this.yFUserHandler = yFUserHandler;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        this.getGeneralUserById = function (id) { return [setup_config_1.SetupConfig.YF_HOST, setup_config_1.SetupConfig.YF_MODULE, setup_config_1.SetupConfig.REST_BASIS,
            setup_config_1.SetupConfig.REST_PATH_USER, setup_config_1.SetupConfig.REST_METHOD_GET, id].join("/"); };
        this.createNewFBUserPath = function () { return [setup_config_1.SetupConfig.YF_HOST, setup_config_1.SetupConfig.YF_MODULE, setup_config_1.SetupConfig.REST_BASIS,
            setup_config_1.SetupConfig.REST_PATH_USER, setup_config_1.SetupConfig.REST_PATH_FB, setup_config_1.SetupConfig.REST_METHOD_CREATE].join("/"); };
    }
    FBRestClient.prototype.createNewFBUser = function (result) {
        return this.http.post(this.createNewFBUserPath(), result, this.options)
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    };
    FBRestClient.prototype.getGeneralUserDataById = function (userId) {
        return this.http.get(this.getGeneralUserById(userId))
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    };
    FBRestClient = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, yf_user_handlers_1.YFUserHandler])
    ], FBRestClient);
    return FBRestClient;
}());
exports.FBRestClient = FBRestClient;
//# sourceMappingURL=fb.rest.client.js.map