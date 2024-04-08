import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsInputComponent } from './news-input.component';

describe('NewsInputComponent', () => {
  let component: NewsInputComponent;
  let fixture: ComponentFixture<NewsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
