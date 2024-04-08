import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterieriinputComponent } from './interieriinput.component';

describe('InterieriinputComponent', () => {
  let component: InterieriinputComponent;
  let fixture: ComponentFixture<InterieriinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterieriinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterieriinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
