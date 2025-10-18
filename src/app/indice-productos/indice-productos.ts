import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-productos',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './indice-productos.html',
  styleUrl: './indice-productos.css',
})
export class IndiceProductos {}
