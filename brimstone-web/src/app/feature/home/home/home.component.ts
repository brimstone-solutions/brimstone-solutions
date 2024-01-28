import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private viewportScroller: ViewportScroller) { }


  ngOnInit(): void {
      Aos.init();
  }
  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
  
}
