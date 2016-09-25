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
    }
    SavedPhotosDashboardComponent.prototype.ngOnInit = function () {
        this.getSavedPhotos(SavedPhotosDashboardComponent.loadInitAmount);
    };
    SavedPhotosDashboardComponent.prototype.getSavedPhotos = function (size) {
        var _this = this;
        this.userDashboardService.getSavedPhotos(0, size, this.storageService.getUserId()).subscribe(function (savedPhotos) {
            _this.singlePhotoListDTO = savedPhotos;
            if (savedPhotos.length < SavedPhotosDashboardComponent.loadInitAmount) {
                _this.loadMorePostPossible = false;
            }
        });
    };
    SavedPhotosDashboardComponent.prototype.deleteSavedPhoto = function (savedPhoto_id) {
        this.singlePhotoListDTO.splice(this.singlePhotoListDTO.findIndex(function (savedPhoto) {
            return savedPhoto.id == savedPhoto_id;
        }), 1);
        this.userDashboardRestClient.deletePhotoById(this.storageService.getUserId(), savedPhoto_id).subscribe(function (res) { return console.log(res); });
    };
    SavedPhotosDashboardComponent.prototype.openLargeImage = function (photo_url, post_id) {
        this.POPUP_PHOTO = photo_url;
        this.POPPUP_POST_ID = post_id;
        this.isCollapsedModal = false;
    };
    SavedPhotosDashboardComponent.prototype.loadMore = function () {
        var _this = this;
        this.userDashboardService.getSavedPhotos(this.singlePhotoListDTO.length, SavedPhotosDashboardComponent.loadMoreAmount, this.storageService.getUserId()).subscribe(function (savedPhotos) {
            _this.singlePhotoListDTO = savedPhotos.concat(_this.singlePhotoListDTO);
            if (savedPhotos.length < SavedPhotosDashboardComponent.loadMoreAmount) {
                _this.loadMorePostPossible = false;
            }
        });
    };
    SavedPhotosDashboardComponent.loadInitAmount = 6;
    SavedPhotosDashboardComponent.loadMoreAmount = 12;
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