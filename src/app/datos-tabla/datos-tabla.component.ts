import { Component } from '@angular/core';
import { TablaService } from '../tabla.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datos-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datos-tabla.component.html',
  styleUrl: './datos-tabla.component.css'
})
export class DatosTablaComponent {
  datos: any;

  constructor(private tablaService: TablaService){}

  ngOnInit(): void {
    this.tablaService.obtenerDatos().subscribe(
      (data: any) => {
        console.log(data);
        this.datos = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
