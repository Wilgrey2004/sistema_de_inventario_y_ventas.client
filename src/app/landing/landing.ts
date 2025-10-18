import { Component, inject, signal } from '@angular/core';
import { Forcasts } from '../forcasts';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  weatherForcastService = inject(Forcasts);

  climas: any[] = [];

  constructor() {
    this.weatherForcastService.obtenerClima().subscribe((datos: any) => {
      this.climas = datos;
    });
  }
  protected readonly title = signal('sistema_de_inventario_y_ventas.client');
}
