import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselVidMsheneblobaComponent } from './carusel-vid-mshenebloba.component';

describe('CaruselVidMsheneblobaComponent', () => {
  let component: CaruselVidMsheneblobaComponent;
  let fixture: ComponentFixture<CaruselVidMsheneblobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaruselVidMsheneblobaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaruselVidMsheneblobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
