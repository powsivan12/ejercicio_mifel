"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var mensaje_error_component_1 = require("../mensaje-error/mensaje-error.component");
var mensaje_exito_component_1 = require("../mensaje-exito/mensaje-exito.component");
var datos_tabla_component_1 = require("../datos-tabla/datos-tabla.component");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog, tablaService) {
        this.dialog = dialog;
        this.tablaService = tablaService;
        this.name = '';
        this.appellidoOne = '';
        this.appellidoTwo = '';
        this.curp = '';
        this.rfc = '';
        this.cp = '';
        this.calle = '';
        this.numExt = '';
        this.numInt = '';
        this.estado = '';
        this.delMun = '';
        this.colonia = '';
        this.formulario = new forms_1.FormGroup({ name: new forms_1.FormControl('', [forms_1.Validators.required]), appellidoOne: new forms_1.FormControl('', [forms_1.Validators.required]),
            appellidoTwo: new forms_1.FormControl(''), curp: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)]),
            rfc: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/)]), cp: new forms_1.FormControl('', [forms_1.Validators.required]),
            calle: new forms_1.FormControl('', [forms_1.Validators.required]), numExt: new forms_1.FormControl('', [forms_1.Validators.required]),
            numInt: new forms_1.FormControl(''), estado: new forms_1.FormControl('', [forms_1.Validators.required]),
            delMun: new forms_1.FormControl(''), colonia: new forms_1.FormControl('', [forms_1.Validators.required]) });
    }
    HomeComponent.prototype.gurdarFormulario = function () {
        var _this = this;
        if (this.formulario.valid) {
            var datosEnviar = {
                infoUsuario: {
                    Nombre: this.name,
                    Apellido: this.appellidoOne,
                    ApellidoPaterno: this.appellidoTwo,
                    Curp: this.curp,
                    Rfc: this.rfc
                },
                Domicilio: {
                    Calle: this.calle,
                    CodigoPostal: this.cp,
                    NumeroExterio: this.numExt,
                    NumeroInterior: this.numInt,
                    Estado: this.estado,
                    DelegacionMunicipio: this.delMun,
                    Colonia: this.colonia
                }
            };
            this.tablaService.enviarDatos(datosEnviar).subscribe(function (respuesta) {
                console.log(respuesta);
                _this.dialog.open(mensaje_exito_component_1.MensajeExitoComponent, { data: 'Datos ingresados correctamente correctamente' });
            }, function (error) {
                _this.dialog.open(mensaje_error_component_1.MensajeErrorComponent, { data: 'Error en enviar datos' });
            });
        }
        else {
            this.dialog.open(mensaje_error_component_1.MensajeErrorComponent, { data: 'Favor de verificar los campos' });
        }
    };
    HomeComponent.prototype.validador = function (event, tipo) {
        if (tipo === 'letras') {
            var regex = /^[a-zA-Z\s]*$/;
            if (!regex.test(String.fromCharCode(event.charCode))) {
                event.preventDefault();
            }
        }
        if (tipo === 'numeros') {
            var regex = /^\d{1,5}$/;
            if (!regex.test(String.fromCharCode(event.charCode))) {
                event.preventDefault();
            }
        }
        if (tipo === 'alfaNumerico') {
            var regex = /^[a-zA-Z0-9]*$/;
            if (!regex.test(String.fromCharCode(event.charCode))) {
                event.preventDefault();
            }
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            standalone: true,
            templateUrl: './home.component.html',
            styleUrl: './home.component.css',
            imports: [forms_1.ReactiveFormsModule, dialog_1.MatDialogModule, mensaje_error_component_1.MensajeErrorComponent, mensaje_exito_component_1.MensajeExitoComponent, datos_tabla_component_1.DatosTablaComponent]
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
