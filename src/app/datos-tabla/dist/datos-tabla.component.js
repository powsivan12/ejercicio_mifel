"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DatosTablaComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var DatosTablaComponent = /** @class */ (function () {
    function DatosTablaComponent(tablaService) {
        this.tablaService = tablaService;
    }
    DatosTablaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tablaService.obtenerDatos().subscribe(function (data) {
            console.log(data);
            _this.datos = data;
        }, function (error) {
            console.error('Error al obtener datos:', error);
        });
    };
    DatosTablaComponent = __decorate([
        core_1.Component({
            selector: 'app-datos-tabla',
            standalone: true,
            imports: [common_1.CommonModule],
            templateUrl: './datos-tabla.component.html',
            styleUrl: './datos-tabla.component.css'
        })
    ], DatosTablaComponent);
    return DatosTablaComponent;
}());
exports.DatosTablaComponent = DatosTablaComponent;
