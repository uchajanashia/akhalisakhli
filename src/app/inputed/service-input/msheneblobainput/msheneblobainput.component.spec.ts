import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsheneblobainputComponent } from './msheneblobainput.component';

describe('MsheneblobainputComponent', () => {
  let component: MsheneblobainputComponent;
  let fixture: ComponentFixture<MsheneblobainputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsheneblobainputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsheneblobainputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
