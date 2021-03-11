import { TestBed } from '@angular/core/testing';

import { LazartBefektetesService } from '../lazart-befektetes.service';

describe('LazartBefektetesService', () => {
  let service: LazartBefektetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazartBefektetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
