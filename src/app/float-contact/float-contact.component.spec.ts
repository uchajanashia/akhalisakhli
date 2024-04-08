import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatContactComponent } from './float-contact.component';

describe('FloatContactComponent', () => {
  let component: FloatContactComponent;
  let fixture: ComponentFixture<FloatContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
