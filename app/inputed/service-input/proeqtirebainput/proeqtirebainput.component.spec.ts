import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProeqtirebainputComponent } from './proeqtirebainput.component';

describe('ProeqtirebainputComponent', () => {
  let component: ProeqtirebainputComponent;
  let fixture: ComponentFixture<ProeqtirebainputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProeqtirebainputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProeqtirebainputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
