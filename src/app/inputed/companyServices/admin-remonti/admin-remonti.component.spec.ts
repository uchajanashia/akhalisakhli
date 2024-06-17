import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRemontiComponent } from './admin-remonti.component';

describe('AdminRemontiComponent', () => {
  let component: AdminRemontiComponent;
  let fixture: ComponentFixture<AdminRemontiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRemontiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminRemontiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
