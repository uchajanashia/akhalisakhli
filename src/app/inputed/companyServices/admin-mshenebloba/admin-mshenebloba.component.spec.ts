import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMsheneblobaComponent } from './admin-mshenebloba.component';

describe('AdminMsheneblobaComponent', () => {
  let component: AdminMsheneblobaComponent;
  let fixture: ComponentFixture<AdminMsheneblobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMsheneblobaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminMsheneblobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
