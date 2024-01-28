import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonPortadaComponent } from './button-portada/button-portada.component';
import { CardsTripleComponent } from './components/cards-triple/cards-triple.component';
import { BoxGrandeComponent } from './components/box-grande/box-grande.component';
import { CardsTripleLargeComponent } from './components/cards-triple-large/cards-triple-large.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ButtonPortadaComponent,
    CardsTripleComponent,
    BoxGrandeComponent,
    CardsTripleLargeComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    ButtonPortadaComponent,
    CardsTripleComponent,
    BoxGrandeComponent,
    CardsTripleLargeComponent,
    FooterComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
