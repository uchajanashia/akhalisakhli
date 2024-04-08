import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputedComponent } from './inputed.component';

describe('InputedComponent', () => {
  let component: InputedComponent;
  let fixture: ComponentFixture<InputedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
