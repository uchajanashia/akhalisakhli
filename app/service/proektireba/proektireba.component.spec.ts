import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProektirebaComponent } from './proektireba.component';

describe('ProektirebaComponent', () => {
  let component: ProektirebaComponent;
  let fixture: ComponentFixture<ProektirebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProektirebaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProektirebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
