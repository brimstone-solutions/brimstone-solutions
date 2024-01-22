import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonPortadaComponent } from './button-portada/button-portada.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ButtonPortadaComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    ButtonPortadaComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
