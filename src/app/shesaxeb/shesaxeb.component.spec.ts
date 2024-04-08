import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShesaxebComponent } from './shesaxeb.component';

describe('ShesaxebComponent', () => {
  let component: ShesaxebComponent;
  let fixture: ComponentFixture<ShesaxebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShesaxebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShesaxebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
