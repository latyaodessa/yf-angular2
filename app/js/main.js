"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
//bootstrap(AppComponent, [
//    HTTP_PROVIDERS,
//    APP_ROUTER_PROVIDERS,
//    {provide: LocationStrategy, useClass: HashLocationStrategy}])
//    .catch(err => console.error(err));
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    app_routes_1.APP_ROUTER_PROVIDERS])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map