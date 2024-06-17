import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandshaptiComponent } from './admin-landshapti.component';

describe('AdminLandshaptiComponent', () => {
  let component: AdminLandshaptiComponent;
  let fixture: ComponentFixture<AdminLandshaptiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLandshaptiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLandshaptiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
