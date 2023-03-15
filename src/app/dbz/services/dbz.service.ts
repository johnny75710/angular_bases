import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

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

  constructor() { }
}
