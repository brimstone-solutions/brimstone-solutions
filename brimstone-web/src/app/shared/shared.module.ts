import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonPortadaComponent } from './button-portada/button-portada.component';
import { CardsTripleComponent } from './components/cards-triple/cards-triple.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ButtonPortadaComponent,
    CardsTripleComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    ButtonPortadaComponent,
    CardsTripleComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
