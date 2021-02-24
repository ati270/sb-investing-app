import { TestBed } from '@angular/core/testing';

import { BefektetesService } from './befektetes.service';

describe('BefektetesService', () => {
  let service: BefektetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BefektetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
