import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidcaruselComponent } from './vidcarusel.component';

describe('VidcaruselComponent', () => {
  let component: VidcaruselComponent;
  let fixture: ComponentFixture<VidcaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VidcaruselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VidcaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
