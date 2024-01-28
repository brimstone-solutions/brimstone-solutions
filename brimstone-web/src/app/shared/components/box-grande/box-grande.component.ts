import { Component } from '@angular/core';
import { trigger, style,transition,animate, state } from '@angular/animations'

@Component({
  selector: 'app-box-grande',
  templateUrl: './box-grande.component.html',
  styleUrl: './box-grande.component.scss',
  // animations: [
  //   trigger('enterSate', [
  //     state('void', style({
  //       transform: 'translateX(-100%)',
  //       opacity: 0
  //     })),
  //     transition(':enter',[
  //       animate(300,style({
  //         transform:'translateX(0)',
  //         opacity: 1
  //       }))
  //     ])
  //   ])
  // ]
})
export class BoxGrandeComponent {

}
