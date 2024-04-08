import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselPicInterierComponent } from './carusel-pic-interier.component';

describe('CaruselPicInterierComponent', () => {
  let component: CaruselPicInterierComponent;
  let fixture: ComponentFixture<CaruselPicInterierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaruselPicInterierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaruselPicInterierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
