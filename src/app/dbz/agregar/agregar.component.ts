import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

export class AgregarComponent {

  // @Input() nuevo: Personaje = {
  //   nombre: 'yhnyhn',
  //   poder: 0
  // };

  nuevo: Personaje = {
    nombre: 'yhnyhn',
    poder: 0
  };

  constructor(private dbzService: DbzService) { }
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;

    } else {
      //this.onNuevoPersonaje.emit(this.nuevo) -> parde del @Output
      this.dbzService.agregarPersonajes(this.nuevo)

      this.nuevo = {
        nombre: '',
        poder: 0
      }
    }
  }
}
