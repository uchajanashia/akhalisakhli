import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselInsideComponent } from './carusel-inside.component';

describe('CaruselInsideComponent', () => {
  let component: CaruselInsideComponent;
  let fixture: ComponentFixture<CaruselInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaruselInsideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaruselInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
