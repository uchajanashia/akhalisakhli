import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInterieriComponent } from './admin-interieri.component';

describe('AdminInterieriComponent', () => {
  let component: AdminInterieriComponent;
  let fixture: ComponentFixture<AdminInterieriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInterieriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminInterieriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
