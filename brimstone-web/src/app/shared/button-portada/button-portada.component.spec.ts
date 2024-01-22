import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPortadaComponent } from './button-portada.component';

describe('ButtonPortadaComponent', () => {
  let component: ButtonPortadaComponent;
  let fixture: ComponentFixture<ButtonPortadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonPortadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
