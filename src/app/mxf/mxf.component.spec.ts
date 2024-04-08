import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxfComponent } from './mxf.component';

describe('MxfComponent', () => {
  let component: MxfComponent;
  let fixture: ComponentFixture<MxfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MxfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MxfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
