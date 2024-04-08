import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShesaxebInputComponent } from './shesaxeb-input.component';

describe('ShesaxebInputComponent', () => {
  let component: ShesaxebInputComponent;
  let fixture: ComponentFixture<ShesaxebInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShesaxebInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShesaxebInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
