"use strict";
var router_1 = require('@angular/router');
var native_list_component_1 = require('./ts/components/lists/native-list.component');
var sets_list_component_1 = require('./ts/components/lists/sets-list.component');
var silhouettes_list_component_1 = require('./ts/components/lists/silhouettes-list.component');
var postlist_component_1 = require('./ts/components/postlist.component');
var post_details_component_1 = require('./ts/components/post.details.component');
var search_component_1 = require('./ts/components/search.component');
var soical_authorization_component_1 = require('./ts/components/core/soical.authorization.component');
var login_component_1 = require('./ts/components/core/login.component');
// Route Configuration
exports.routes = [
    {
        path: '',
        component: postlist_component_1.PostlistComponent
    },
    { path: '', component: postlist_component_1.PostlistComponent },
    { path: 'native', component: native_list_component_1.NativeListComponent },
    { path: 'native/:page', component: native_list_component_1.NativeListComponent },
    { path: 'sets', component: sets_list_component_1.SetsListComponent },
    { path: 'sets/:page', component: sets_list_component_1.SetsListComponent },
    { path: 'silhouettes', component: silhouettes_list_component_1.SilhouettesListComponent },
    { path: 'silhouettes/:page', component: silhouettes_list_component_1.SilhouettesListComponent },
    { path: 'post/:id', component: post_details_component_1.PostDetailsComponent },
    { path: 'search/:query', component: search_component_1.SearchComponent },
    { path: 'auth/:from/', component: soical_authorization_component_1.SocialAuthorizationComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
// Export routes
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map