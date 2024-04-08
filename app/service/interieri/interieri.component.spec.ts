import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterieriComponent } from './interieri.component';

describe('InterieriComponent', () => {
  let component: InterieriComponent;
  let fixture: ComponentFixture<InterieriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterieriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterieriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
