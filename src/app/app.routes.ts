import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { IndiceProductos } from './indice-productos/indice-productos';
import { CrearProducto } from './crear-producto/crear-producto';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
  },
  {
    path: 'productos',
    component: IndiceProductos,
  },
  {
    path: 'productos/crear',
    component: CrearProducto,
  },
];
