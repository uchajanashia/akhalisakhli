import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselVidsPicsComponent } from './carusel-vids-pics.component';

describe('CaruselVidsPicsComponent', () => {
  let component: CaruselVidsPicsComponent;
  let fixture: ComponentFixture<CaruselVidsPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaruselVidsPicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaruselVidsPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
