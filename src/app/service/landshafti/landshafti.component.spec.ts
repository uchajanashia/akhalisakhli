import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandshaftiComponent } from './landshafti.component';

describe('LandshaftiComponent', () => {
  let component: LandshaftiComponent;
  let fixture: ComponentFixture<LandshaftiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandshaftiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandshaftiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
