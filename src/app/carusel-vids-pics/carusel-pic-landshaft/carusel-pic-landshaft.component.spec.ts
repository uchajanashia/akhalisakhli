import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselPicLandshaftComponent } from './carusel-pic-landshaft.component';

describe('CaruselPicLandshaftComponent', () => {
  let component: CaruselPicLandshaftComponent;
  let fixture: ComponentFixture<CaruselPicLandshaftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaruselPicLandshaftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaruselPicLandshaftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
