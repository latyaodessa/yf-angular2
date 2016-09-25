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
var post_for_save_dto_1 = require('./../../objects/user/dtos/post.for.save.dto');
var photo_for_save_dto_1 = require('./../../objects/user/dtos/photo.for.save.dto');
var date_time_service_1 = require('./../core/date.time.service');
var user_dashboard_rest_client_1 = require('./../http/user.dashboard.rest.client');
var elastic_client_service_1 = require('./../http/elastic.client.service');
var yf_post_handlers_1 = require('./../handlers/yf.post.handlers');
var http_1 = require('@angular/http');
var UserDashboardService = (function () {
    function UserDashboardService(http, dateTimeService, elasticClient, userDashboardRestClient, yfPostHandler) {
        var _this = this;
        this.http = http;
        this.dateTimeService = dateTimeService;
        this.elasticClient = elasticClient;
        this.userDashboardRestClient = userDashboardRestClient;
        this.yfPostHandler = yfPostHandler;
        this.savePostTODashboard = function (post_id, user_id) {
            if (!post_id && !user_id) {
                return null;
            }
            _this.postForSave = new post_for_save_dto_1.PostForSave(post_id, user_id, _this.dateTimeService.getCurrentDateTime(), "");
            return _this.userDashboardRestClient.savePostToUserDashboard(_this.postForSave).subscribe(function (savedPost) { return savedPost; });
        };
        this.generatePhotoSaveDTOForUser = function (user_id, photo_url, ph, md, post_id) { return new photo_for_save_dto_1.PhotoForSave(photo_url, user_id, "", "", ph, md, post_id); };
    }
    UserDashboardService.prototype.getSavedPosts = function (from, size, userId) {
        return this.http.get(this.elasticClient.getSavedUserPosts(from, size, userId))
            .map(this.yfPostHandler.extractData)
            .catch(this.yfPostHandler.handleError);
    };
    UserDashboardService.prototype.getSavedPhotos = function (from, size, userId) {
        return this.http.get(this.elasticClient.getSavedUserPhotos(from, size, userId))
            .map(this.yfPostHandler.extractSinglePhotosData)
            .catch(this.yfPostHandler.handleError);
    };
    UserDashboardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, date_time_service_1.DateTimeService, elastic_client_service_1.ElasticClient, user_dashboard_rest_client_1.UserDashboardRestClient, yf_post_handlers_1.YFPostHandler])
    ], UserDashboardService);
    return UserDashboardService;
}());
exports.UserDashboardService = UserDashboardService;
//# sourceMappingURL=user.dashboard.service.js.map