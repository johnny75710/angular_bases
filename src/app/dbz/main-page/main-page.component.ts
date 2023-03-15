import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Capitana Marvel',
      poder: 40000
    },
    {
      nombre: 'Groot',
      poder: 3050
    }
  ]


  nuevo: Personaje = {
    nombre: 'hola',
    poder: 150,
  };


  addPersonaje(heroe: Personaje){
    this.personajes.push(heroe)
  }
}
