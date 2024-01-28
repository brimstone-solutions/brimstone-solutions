import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxGrandeComponent } from './box-grande.component';

describe('BoxGrandeComponent', () => {
  let component: BoxGrandeComponent;
  let fixture: ComponentFixture<BoxGrandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxGrandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
