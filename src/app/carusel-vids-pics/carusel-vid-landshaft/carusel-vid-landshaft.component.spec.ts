import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselVidLandshaftComponent } from './carusel-vid-landshaft.component';

describe('CaruselVidLandshaftComponent', () => {
  let component: CaruselVidLandshaftComponent;
  let fixture: ComponentFixture<CaruselVidLandshaftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaruselVidLandshaftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaruselVidLandshaftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
