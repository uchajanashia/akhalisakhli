import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProeqtirebaComponent } from './admin-proeqtireba.component';

describe('AdminProeqtirebaComponent', () => {
  let component: AdminProeqtirebaComponent;
  let fixture: ComponentFixture<AdminProeqtirebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProeqtirebaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProeqtirebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
