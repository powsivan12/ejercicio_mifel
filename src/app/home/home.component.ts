import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog'; 
import { MensajeErrorComponent } from '../mensaje-error/mensaje-error.component';
import { MensajeExitoComponent } from '../mensaje-exito/mensaje-exito.component';
import { DatosTablaComponent } from "../datos-tabla/datos-tabla.component";
import { HttpClientModule } from '@angular/common/http';
import { TablaService } from '../tabla.service';
import { error } from 'console';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ReactiveFormsModule, MatDialogModule, MensajeErrorComponent, MensajeExitoComponent, DatosTablaComponent]
})
export class HomeComponent {
  name: string = '';
  appellidoOne: string = '';
  appellidoTwo: string = '';
  curp: string = '';
  rfc: string = '';
  cp: string = '';
  calle: string = '';
  numExt: string = '';
  numInt: string = '';
  estado: string = '';
  delMun: string = '';
  colonia: string = '';

  constructor (private dialog: MatDialog,
    private tablaService: TablaService){
  }
  formulario = new FormGroup({name: new FormControl('',[Validators.required]), appellidoOne: new FormControl('',[Validators.required]),
  appellidoTwo: new FormControl(''),curp: new FormControl('',[Validators.required,Validators.pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)]),
  rfc: new FormControl('',[Validators.required,Validators.pattern(/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/)]),cp: new FormControl('',[Validators.required]),
  calle: new FormControl('',[Validators.required]),numExt: new FormControl('',[Validators.required]),
  numInt: new FormControl(''),estado: new FormControl('',[Validators.required]),
  delMun: new FormControl(''),colonia: new FormControl('',[Validators.required])});
  
  gurdarFormulario(){
    if(this.formulario.valid){
      const datosEnviar = { 
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
        Colonia:this.colonia
      }
      
      };
      this.tablaService.enviarDatos(datosEnviar).subscribe(
        respuesta => {
          console.log(respuesta);
          this.dialog.open(MensajeExitoComponent,{data: 'Datos ingresados correctamente correctamente'});
        },
        error => {
          this.dialog.open(MensajeErrorComponent,{data: 'Error en enviar datos'});
        }
      );
    }else{
      this.dialog.open(MensajeErrorComponent,{data: 'Favor de verificar los campos'});
    }
  }

  validador(event: KeyboardEvent,tipo: string) {
    if(tipo === 'letras'){
      const regex = /^[a-zA-Z\s]*$/
      if(!regex.test(String.fromCharCode(event.charCode))){
        event.preventDefault()
      }    
    }
    if(tipo === 'numeros'){
      const regex = /^\d{1,5}$/
      if(!regex.test(String.fromCharCode(event.charCode))){
        event.preventDefault()
      }    
    }
    if(tipo === 'alfaNumerico'){
      const regex = /^[a-zA-Z0-9]*$/
      if(!regex.test(String.fromCharCode(event.charCode))){
        event.preventDefault();
      }    
    }
  }

}
