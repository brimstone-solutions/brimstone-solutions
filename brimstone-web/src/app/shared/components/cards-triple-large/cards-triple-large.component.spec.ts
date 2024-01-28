import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTripleLargeComponent } from './cards-triple-large.component';

describe('CardsTripleLargeComponent', () => {
  let component: CardsTripleLargeComponent;
  let fixture: ComponentFixture<CardsTripleLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsTripleLargeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsTripleLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
