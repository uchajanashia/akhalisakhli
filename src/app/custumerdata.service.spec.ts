import { TestBed } from '@angular/core/testing';

import { CustumerdataService } from './custumerdata.service';

describe('CustumerdataService', () => {
  let service: CustumerdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustumerdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
