import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselVidRemontiComponent } from './carusel-vid-remonti.component';

describe('CaruselVidRemontiComponent', () => {
  let component: CaruselVidRemontiComponent;
  let fixture: ComponentFixture<CaruselVidRemontiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaruselVidRemontiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaruselVidRemontiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
