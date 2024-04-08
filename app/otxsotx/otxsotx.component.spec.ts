import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtxsotxComponent } from './otxsotx.component';

describe('OtxsotxComponent', () => {
  let component: OtxsotxComponent;
  let fixture: ComponentFixture<OtxsotxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtxsotxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtxsotxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
