import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceroutingComponent } from './admin-servicerouting.component';

describe('AdminServiceroutingComponent', () => {
  let component: AdminServiceroutingComponent;
  let fixture: ComponentFixture<AdminServiceroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminServiceroutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminServiceroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
