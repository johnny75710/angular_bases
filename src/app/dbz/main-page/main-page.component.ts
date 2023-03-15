import { Component } from '@angular/core';
import { DbzModule } from '../dbz.module';
import { Personaje } from '../interfaces/dbz.interface'
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //personajes: Personaje[];

  nuevo: Personaje = {
    nombre: 'hola',
    poder: 150,
  };


  addPersonaje(heroe: Personaje) {
    this.personajes.push(heroe)
  }

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {
    //   this.personajes = this.dbzService.personajes
    // }
  }
}
