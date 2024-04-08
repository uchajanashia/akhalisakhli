import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandinputComponent } from './landinput.component';

describe('LandinputComponent', () => {
  let component: LandinputComponent;
  let fixture: ComponentFixture<LandinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
