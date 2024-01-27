import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTripleComponent } from './cards-triple.component';

describe('CardsTripleComponent', () => {
  let component: CardsTripleComponent;
  let fixture: ComponentFixture<CardsTripleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsTripleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsTripleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
