import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-portada',
  templateUrl: './button-portada.component.html',
  styleUrl: './button-portada.component.scss'
})
export class ButtonPortadaComponent {
@Input() ref: string = "";
@Input() text: string = "";

redirectToPage() {
  window.location.href = this.ref;
}
}
