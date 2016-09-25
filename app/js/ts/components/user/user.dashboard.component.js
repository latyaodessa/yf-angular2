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
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var storage_service_1 = require('./../../services/authorization/storage.service');
var message_properties_1 = require('./../../config/message.properties');
var setup_config_1 = require('./../../config/setup.config');
var saved_posts_dashboard_component_1 = require('./saved.posts.dashboard.component');
var saved_photos_dashboard_component_1 = require('./saved.photos.dashboard.component');
var user_dashboard_service_1 = require('./../../services/dashboard/user.dashboard.service');
var date_time_service_1 = require('./../../services/core/date.time.service');
var elastic_client_service_1 = require('./../../services/http/elastic.client.service');
var user_dashboard_rest_client_1 = require('./../../services/http/user.dashboard.rest.client');
var yf_user_handlers_1 = require('./../../services/handlers/yf.user.handlers');
var yf_post_handlers_1 = require('./../../services/handlers/yf.post.handlers');
var UserDashboardComponent = (function () {
    function UserDashboardComponent(router, route, titleService, storageService) {
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.storageService = storageService;
        this.EXIT = message_properties_1.MessageConfig.EXIT;
        if (!this.storageService.getUserId()) {
            this.router.navigateByUrl(setup_config_1.SetupConfig.LOGIN_ROUTE);
        }
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        this.initLayout();
        this.initContent();
    };
    UserDashboardComponent.prototype.logout = function () {
        this.storageService.logout();
        window.location.href = "/";
    };
    UserDashboardComponent.prototype.initLayout = function () {
        this.titleService.setTitle(message_properties_1.MessageConfig.DASHBOARD_TITLE + ', ' + this.storageService.getUserFirstName() + ' ' + this.storageService.getUserLastName());
    };
    UserDashboardComponent.prototype.initContent = function () {
        this.thumbnail = this.storageService.getUserPhoto_50();
        this.first_name = this.storageService.getUserFirstName();
        this.last_name = this.storageService.getUserLastName();
    };
    UserDashboardComponent = __decorate([
        core_1.Component({
            selector: 'user-dashboard',
            templateUrl: 'app/ts/templates/user/user.dashboard.component.html',
            providers: [platform_browser_1.Title, storage_service_1.StorageService, user_dashboard_service_1.UserDashboardService, date_time_service_1.DateTimeService, elastic_client_service_1.ElasticClient,
                user_dashboard_rest_client_1.UserDashboardRestClient, yf_user_handlers_1.YFUserHandler, yf_post_handlers_1.YFPostHandler],
            directives: [router_1.ROUTER_DIRECTIVES, saved_posts_dashboard_component_1.SavedPostDashboardComponent, saved_photos_dashboard_component_1.SavedPhotosDashboardComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, platform_browser_1.Title, storage_service_1.StorageService])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());
exports.UserDashboardComponent = UserDashboardComponent;
//# sourceMappingURL=user.dashboard.component.js.map