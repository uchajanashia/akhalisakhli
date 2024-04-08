import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidsliderComponent } from './vidslider.component';

describe('VidsliderComponent', () => {
  let component: VidsliderComponent;
  let fixture: ComponentFixture<VidsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VidsliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VidsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
