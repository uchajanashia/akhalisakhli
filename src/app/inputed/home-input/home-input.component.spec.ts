import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInputComponent } from './home-input.component';

describe('HomeInputComponent', () => {
  let component: HomeInputComponent;
  let fixture: ComponentFixture<HomeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
