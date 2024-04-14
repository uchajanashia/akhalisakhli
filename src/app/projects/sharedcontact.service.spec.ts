import { TestBed } from '@angular/core/testing';

import { SharedcontactService } from './sharedcontact.service';

describe('SharedcontactService', () => {
  let service: SharedcontactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedcontactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
