import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mensaje-exito',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './mensaje-exito.component.html',
  styleUrl: './mensaje-exito.component.css'
})
export class MensajeExitoComponent {
  constructor(public dialogRef: MatDialogRef<MensajeExitoComponent>, @Inject(MAT_DIALOG_DATA) public Msg: string){

  }

}
