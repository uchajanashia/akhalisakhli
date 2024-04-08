import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselVidInterierComponent } from './carusel-vid-interier.component';

describe('CaruselVidInterierComponent', () => {
  let component: CaruselVidInterierComponent;
  let fixture: ComponentFixture<CaruselVidInterierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaruselVidInterierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaruselVidInterierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
