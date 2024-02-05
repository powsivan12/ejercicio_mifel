"use strict";
exports.__esModule = true;
exports.appConfig = void 0;
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var platform_browser_1 = require("@angular/platform-browser");
var async_1 = require("@angular/platform-browser/animations/async");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
exports.appConfig = {
    providers: [router_1.provideRouter(app_routes_1.routes), platform_browser_1.provideClientHydration(), async_1.provideAnimationsAsync(), core_1.importProvidersFrom(http_1.HttpClientModule)]
};
