import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselPicRemontiComponent } from './carusel-pic-remonti.component';

describe('CaruselPicRemontiComponent', () => {
  let component: CaruselPicRemontiComponent;
  let fixture: ComponentFixture<CaruselPicRemontiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaruselPicRemontiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaruselPicRemontiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
