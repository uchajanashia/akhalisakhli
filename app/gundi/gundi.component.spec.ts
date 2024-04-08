import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GundiComponent } from './gundi.component';

describe('GundiComponent', () => {
  let component: GundiComponent;
  let fixture: ComponentFixture<GundiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GundiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GundiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
