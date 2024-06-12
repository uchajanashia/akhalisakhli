import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPartnersComponent } from './company-partners.component';

describe('CompanyPartnersComponent', () => {
  let component: CompanyPartnersComponent;
  let fixture: ComponentFixture<CompanyPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyPartnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
