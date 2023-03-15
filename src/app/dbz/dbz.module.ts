import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';

/*Creado el módulo dbz*/

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ], //Las declaraciones son los componentes que forman parte del módulo
  imports: [
    CommonModule, 
    FormsModule //Importamos modulo de formularios
  ], 

  //Los componentes a exportar del módulo
  exports: [
    MainPageComponent
  ], 

  providers: [
    DbzService
  ]
})
export class DbzModule { }
