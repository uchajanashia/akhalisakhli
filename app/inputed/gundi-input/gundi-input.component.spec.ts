import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GundiInputComponent } from './gundi-input.component';

describe('GundiInputComponent', () => {
  let component: GundiInputComponent;
  let fixture: ComponentFixture<GundiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GundiInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GundiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
