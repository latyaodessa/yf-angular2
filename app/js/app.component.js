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
require('./rxjs-operators');
var router_1 = require('@angular/router');
var postlist_component_1 = require('./ts/components/postlist.component');
var native_list_component_1 = require('./ts/components/lists/native-list.component');
var art_list_component_1 = require('./ts/components/lists/art.list.component');
var search_component_1 = require('./ts/components/search.component');
var sets_list_component_1 = require('./ts/components/lists/sets-list.component');
var soical_authorization_component_1 = require('./ts/components/core/soical.authorization.component');
var login_component_1 = require('./ts/components/core/login.component');
var silhouettes_list_component_1 = require('./ts/components/lists/silhouettes-list.component');
var post_details_component_1 = require('./ts/components/post.details.component');
var post_workflow_1 = require('./ts/services/workflow/post.workflow');
var collapse_1 = require('ng2-bootstrap/components/collapse');
var forms_1 = require('@angular/forms');
var message_properties_1 = require('./ts/config/message.properties');
var setup_config_1 = require('./ts/config/setup.config');
var storage_service_1 = require('./ts/services/authorization/storage.service');
var user_dashboard_component_1 = require('./ts/components/user/user.dashboard.component');
var info_page_component_1 = require('./ts/components/pages/info.page.component');
var AppComponent = (function () {
    function AppComponent(router, storageService, setupConfig) {
        this.router = router;
        this.storageService = storageService;
        this.setupConfig = setupConfig;
        this.searchControl = new forms_1.FormControl();
        this.isCollapsed = true;
        ga('create', setup_config_1.SetupConfig.GOOGLE_AN_ID, setup_config_1.SetupConfig.GOOGLE_AN_MODE);
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                ga('send', 'pageview', event.urlAfterRedirects);
            }
        });
        this.searchControl.valueChanges.subscribe(function (value) {
            // do something with value here
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initMessageProperties();
        this.initSetupProperties();
        this.initLoginEventListeners();
        this.checkCurrentLogin();
    };
    AppComponent.prototype.initLoginEventListeners = function () {
        var _this = this;
        this.storageService.getEmittedLoginStatus().subscribe(function (isLoggedIn) { return _this.isLoggedIn = isLoggedIn; });
        this.storageService.getEmittedvkUserDTO().subscribe(function (userDTO) { return _this.vkStorageUserDTO = userDTO; });
    };
    AppComponent.prototype.initMessageProperties = function () {
        this.MAIN_PAGE = message_properties_1.MessageConfig.MAIN_PAGE;
        this.ENTER = message_properties_1.MessageConfig.ENTER;
        this.EXIT = message_properties_1.MessageConfig.EXIT;
        this.NATIVE = message_properties_1.MessageConfig.NATIVE;
        this.SETS = message_properties_1.MessageConfig.SETS;
        this.SILHOUETTES = message_properties_1.MessageConfig.SILHOUETTES;
        this.YF_SLOGAN = message_properties_1.MessageConfig.YF_SLOGAN;
        this.ART = message_properties_1.MessageConfig.ART;
    };
    AppComponent.prototype.initSetupProperties = function () {
        this.sets_route = setup_config_1.SetupConfig.SETS_LIST_ROUTE;
        this.native_route = setup_config_1.SetupConfig.NATIVE_LIST_ROUTE;
        this.silhouettes_route = setup_config_1.SetupConfig.SILHOUETTES_LIST_ROUTE;
        this.login_route = setup_config_1.SetupConfig.LOGIN_ROUTE;
        this.search_route = setup_config_1.SetupConfig.SEARCH_ROUTE;
        this.dashboard_route = setup_config_1.SetupConfig.DASHBOARD_ROUTE;
        this.art_route = setup_config_1.SetupConfig.ART_ROUTE;
    };
    AppComponent.prototype.checkCurrentLogin = function () {
        this.storageService.checkIsUserLoggedIn();
        if (this.isLoggedIn) {
            this.storageService.getVkUserDTO();
        }
    };
    AppComponent.prototype.logout = function () {
        this.storageService.logout();
        this.router.navigate(['/']);
    };
    AppComponent.prototype.collapsed = function (event) {
        console.log(event);
    };
    AppComponent.prototype.expanded = function (event) {
        console.log(event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'yf',
            templateUrl: 'app/ts/templates/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, collapse_1.CollapseDirective],
            providers: [post_workflow_1.PostWorkflow, storage_service_1.StorageService, setup_config_1.SetupConfig],
            precompile: [postlist_component_1.PostlistComponent, sets_list_component_1.SetsListComponent, native_list_component_1.NativeListComponent, post_details_component_1.PostDetailsComponent,
                search_component_1.SearchComponent, silhouettes_list_component_1.SilhouettesListComponent, soical_authorization_component_1.SocialAuthorizationComponent, login_component_1.LoginComponent,
                user_dashboard_component_1.UserDashboardComponent, art_list_component_1.ArtListComponent, info_page_component_1.InfoPage]
        }), 
        __metadata('design:paramtypes', [router_1.Router, storage_service_1.StorageService, setup_config_1.SetupConfig])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map