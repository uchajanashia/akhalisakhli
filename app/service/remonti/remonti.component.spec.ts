import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemontiComponent } from './remonti.component';

describe('RemontiComponent', () => {
  let component: RemontiComponent;
  let fixture: ComponentFixture<RemontiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemontiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemontiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
