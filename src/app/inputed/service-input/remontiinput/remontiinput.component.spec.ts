import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemontiinputComponent } from './remontiinput.component';

describe('RemontiinputComponent', () => {
  let component: RemontiinputComponent;
  let fixture: ComponentFixture<RemontiinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemontiinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemontiinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
