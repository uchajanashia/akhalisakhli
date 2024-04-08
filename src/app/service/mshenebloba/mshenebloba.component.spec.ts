import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsheneblobaComponent } from './mshenebloba.component';

describe('MsheneblobaComponent', () => {
  let component: MsheneblobaComponent;
  let fixture: ComponentFixture<MsheneblobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsheneblobaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsheneblobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
