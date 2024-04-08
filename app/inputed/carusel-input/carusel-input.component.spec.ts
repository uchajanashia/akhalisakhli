import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselInputComponent } from './carusel-input.component';

describe('CaruselInputComponent', () => {
  let component: CaruselInputComponent;
  let fixture: ComponentFixture<CaruselInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaruselInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaruselInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
