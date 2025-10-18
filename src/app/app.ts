import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Forcasts } from './forcasts';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [Menu, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  
}
