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
var user_dashboard_service_1 = require('./../../services/dashboard/user.dashboard.service');
var storage_service_1 = require('./../../services/authorization/storage.service');
var post_service_1 = require('./../../services/post.service');
var collapse_1 = require('ng2-bootstrap/components/collapse');
var message_properties_1 = require('./../../config/message.properties');
var setup_config_1 = require('./../../config/setup.config');
var router_1 = require('@angular/router');
var user_dashboard_rest_client_1 = require('./../../services/http/user.dashboard.rest.client');
var SavedPhotosDashboardComponent = (function () {
    function SavedPhotosDashboardComponent(userDashboardService, storageService, postService, userDashboardRestClient) {
        this.userDashboardService = userDashboardService;
        this.storageService = storageService;
        this.postService = postService;
        this.userDashboardRestClient = userDashboardRestClient;
        this.title = message_properties_1.MessageConfig.SAVED_PHOTOS_TITLE;
        this.single_route = setup_config_1.SetupConfig.SINGLE_POST_ROUTE;
        this.NO_SAVED_PHOTOS = message_properties_1.MessageConfig.NO_SAVED_PHOTOS;
        this.OPEN_SINGLE_POST = message_properties_1.MessageConfig.OPEN_SINGLE_POST;
        this.singlePhotoListDTO = [];
        this.SHOW_ALL_PICS_FULL = message_properties_1.MessageConfig.SHOW_ALL_PICS_FULL;
        this.loadMorePostPossible = true;
        this.isCollapsedModal = true;
        this.contentExistence = true;
        this.isContentExist = function (count) {
            return count > 0 ? true : false;
        };
    }
    SavedPhotosDashboardComponent.prototype.ngOnInit = function () {
        this.getSavedPhotos(SavedPhotosDashboardComponent.loadInitAmount);
    };
    SavedPhotosDashboardComponent.prototype.getSavedPhotos = function (size) {
        var _this = this;
        this.userDashboardService.getSavedPhotos(0, size, this.storageService.getUserId()).subscribe(function (savedPhotos) {
            _this.singlePhotoListDTO = savedPhotos;
            console.log(_this.singlePhotoListDTO);
            _this.contentExistence = _this.isContentExist(savedPhotos.length);
            _this.isLoadMorePossible(savedPhotos.length, SavedPhotosDashboardComponent.loadInitAmount);
        });
    };
    SavedPhotosDashboardComponent.prototype.deleteSavedPhoto = function (savedPhoto_id) {
        var _this = this;
        this.singlePhotoListDTO.splice(this.singlePhotoListDTO.findIndex(function (savedPhoto) {
            return savedPhoto.id == savedPhoto_id;
        }), 1);
        this.userDashboardRestClient.deletePhotoById(this.storageService.getUserId(), savedPhoto_id).subscribe(function (res) {
            _this.loadOne();
            _this.contentExistence = _this.isContentExist(_this.singlePhotoListDTO.length);
        });
    };
    SavedPhotosDashboardComponent.prototype.openLargeImage = function (photo_url, post_id) {
        this.POPUP_PHOTO = photo_url;
        this.POPPUP_POST_ID = post_id;
        this.isCollapsedModal = false;
    };
    SavedPhotosDashboardComponent.prototype.loadOne = function () {
        var _this = this;
        this.userDashboardService.getSavedPhotos(this.singlePhotoListDTO.length + 1, SavedPhotosDashboardComponent.loadOneAmount, this.storageService.getUserId()).subscribe(function (savedPhotos) {
            _this.singlePhotoListDTO = _this.singlePhotoListDTO.concat(savedPhotos);
        });
    };
    SavedPhotosDashboardComponent.prototype.loadMore = function () {
        var _this = this;
        this.userDashboardService.getSavedPhotos(this.singlePhotoListDTO.length, SavedPhotosDashboardComponent.loadMoreAmount, this.storageService.getUserId()).subscribe(function (savedPhotos) {
            _this.singlePhotoListDTO = _this.singlePhotoListDTO.concat(savedPhotos);
            _this.isLoadMorePossible(savedPhotos.length, SavedPhotosDashboardComponent.loadMoreAmount);
        });
    };
    SavedPhotosDashboardComponent.prototype.isLoadMorePossible = function (length, amount) {
        if (length < amount) {
            this.loadMorePostPossible = false;
        }
    };
    SavedPhotosDashboardComponent.loadInitAmount = 6;
    SavedPhotosDashboardComponent.loadMoreAmount = 12;
    SavedPhotosDashboardComponent.loadOneAmount = 1;
    SavedPhotosDashboardComponent = __decorate([
        core_1.Component({
            selector: 'saved-photos-dashboard',
            templateUrl: 'app/ts/templates/user/saved.photos.dashboard.component.html',
            providers: [post_service_1.PostService, storage_service_1.StorageService, user_dashboard_service_1.UserDashboardService, user_dashboard_rest_client_1.UserDashboardRestClient],
            directives: [router_1.ROUTER_DIRECTIVES, collapse_1.CollapseDirective]
        }), 
        __metadata('design:paramtypes', [user_dashboard_service_1.UserDashboardService, storage_service_1.StorageService, post_service_1.PostService, user_dashboard_rest_client_1.UserDashboardRestClient])
    ], SavedPhotosDashboardComponent);
    return SavedPhotosDashboardComponent;
}());
exports.SavedPhotosDashboardComponent = SavedPhotosDashboardComponent;
//# sourceMappingURL=saved.photos.dashboard.component.js.map