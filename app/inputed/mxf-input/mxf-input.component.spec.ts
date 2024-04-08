import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxfInputComponent } from './mxf-input.component';

describe('MxfInputComponent', () => {
  let component: MxfInputComponent;
  let fixture: ComponentFixture<MxfInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MxfInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MxfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
