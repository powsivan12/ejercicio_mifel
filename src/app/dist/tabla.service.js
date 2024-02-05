"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TablaService = void 0;
var core_1 = require("@angular/core");
var TablaService = /** @class */ (function () {
    function TablaService(http) {
        this.http = http;
        this.apiUrl = 'http://jsonplaceholder.typicode.com/users';
        this.postUrl = 'http://httpbin.org/post';
    }
    TablaService.prototype.obtenerDatos = function () {
        return this.http.get(this.apiUrl);
    };
    TablaService.prototype.enviarDatos = function (data) {
        return this.http.post(this.postUrl, data);
    };
    TablaService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TablaService);
    return TablaService;
}());
exports.TablaService = TablaService;
