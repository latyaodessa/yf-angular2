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
var vk_storage_user_dto_1 = require('./../../objects/user/dtos/vk.storage.user.dto');
var content_properties_1 = require('./../../config/content.properties');
var StorageService = (function () {
    function StorageService() {
        var _this = this;
        this.isLoggedIn = new core_1.EventEmitter();
        this.userDTO = new core_1.EventEmitter();
        this.checkIsUserLoggedIn = function () {
            _this.isLoggedIn.emit(localStorage.getItem(setup_config_1.SetupConfig.USER_ID_NAME) ? true : false);
        };
        this.getVkUserDTO = function () {
            _this.userDTO.emit(new vk_storage_user_dto_1.VKStorageUserDTO(_this.getUserId(), _this.getUserFirstName(), _this.getUserLastName(), _this.getUserPhoto_50(), _this.getUserType()));
        };
        this.getCurrentLoginStatus = function () { return localStorage.getItem(setup_config_1.SetupConfig.USER_ID_NAME) ? true : false; };
        this.getUserDTO = function () {
            if (_this.getUserType() == content_properties_1.ContentProperties.VK_USER) {
                return _this.getVkUserDTO();
            }
        };
        this.getUserId = function () { return localStorage.getItem(setup_config_1.SetupConfig.USER_ID_NAME); };
        this.getUserFirstName = function () { return localStorage.getItem(setup_config_1.SetupConfig.FIRST_NAME_KEY_NAME); };
        this.getUserLastName = function () { return localStorage.getItem(setup_config_1.SetupConfig.LAST_NAME_KEY_NAME); };
        this.getUserPhoto_50 = function () { return localStorage.getItem(setup_config_1.SetupConfig.THUMBNAIL); };
        this.getUserType = function () { return localStorage.getItem(setup_config_1.SetupConfig.USER_TYPE_NAME); };
    }
    StorageService.prototype.logout = function () {
        localStorage.clear();
        sessionStorage.clear();
        this.checkIsUserLoggedIn();
    };
    StorageService.prototype.getEmittedLoginStatus = function () {
        return this.isLoggedIn;
    };
    StorageService.prototype.getEmittedvkUserDTO = function () {
        return this.userDTO;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StorageService.prototype, "isLoggedIn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StorageService.prototype, "userDTO", void 0);
    StorageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StorageService);
    return StorageService;
}());
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map