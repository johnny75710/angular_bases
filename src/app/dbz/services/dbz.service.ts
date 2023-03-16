import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Capitana Marvel',
      poder: 40000
    },
    {
      nombre: 'Groot',
      poder: 3050
    }
  ]
  
  get personajes(): Personaje[]{
    return [...this._personajes]
  }

  agregarPersonajes(personaje: Personaje){
    this._personajes.push(personaje)
  }
  constructor() { }
}
