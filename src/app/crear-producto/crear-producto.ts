import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatAnchor } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { Laptop } from '../laptop';
import { LaptopCreacion } from '../laptopModels';
@Component({
  selector: 'app-crear-producto',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatAnchor, RouterLink],
  templateUrl: './crear-producto.html',
})
export class CrearProducto {
  private readonly formBuilder = inject(FormBuilder);
  router = inject(Router);
  laptopService = inject(Laptop);
  form = this.formBuilder.group({
    Nombre: [''],
    Marca: [''],
  });

  guardarCambios() {
    let laptop = this.form.value as LaptopCreacion;
    this.laptopService.Crear(laptop).subscribe(() => {
      this.router.navigate(['/productos']);
    });
  }
}
