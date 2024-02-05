import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mensaje-error',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './mensaje-error.component.html',
  styleUrl: './mensaje-error.component.css'
})
export class MensajeErrorComponent {
  constructor(public dialogRef: MatDialogRef<MensajeErrorComponent>, @Inject(MAT_DIALOG_DATA) public Msg: string){
  }
}
