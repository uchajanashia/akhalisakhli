import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersInputComponent } from './partners-input.component';

describe('PartnersInputComponent', () => {
  let component: PartnersInputComponent;
  let fixture: ComponentFixture<PartnersInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnersInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
