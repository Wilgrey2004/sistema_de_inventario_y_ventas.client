import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { LaptopCreacion } from './laptopModels';

@Injectable({
  providedIn: 'root',
})
export class Laptop {
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + 'api/laptops';
  constructor() {}

  public Crear(Laptop: LaptopCreacion) {
    return this.http.post(this.URLbase, Laptop);
  }
}
