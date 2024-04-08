import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselPicMsheneblobaComponent } from './carusel-pic-mshenebloba.component';

describe('CaruselPicMsheneblobaComponent', () => {
  let component: CaruselPicMsheneblobaComponent;
  let fixture: ComponentFixture<CaruselPicMsheneblobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaruselPicMsheneblobaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaruselPicMsheneblobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
