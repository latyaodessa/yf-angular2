"use strict";
var router_1 = require('@angular/router');
var native_list_component_1 = require('./ts/components/lists/native-list.component');
var sets_list_component_1 = require('./ts/components/lists/sets-list.component');
var postlist_component_1 = require('./ts/components/postlist.component');
var post_details_component_1 = require('./ts/components/post.details.component');
// Route Configuration
exports.routes = [
    {
        path: '',
        component: postlist_component_1.PostlistComponent
    },
    { path: '', component: postlist_component_1.PostlistComponent },
    { path: 'native', component: native_list_component_1.NativeListComponent },
    { path: 'sets', component: sets_list_component_1.SetsListComponent },
    { path: 'yf-post/:id', component: post_details_component_1.PostDetailsComponent }
];
// Export routes
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map