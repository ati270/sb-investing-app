import { TestBed } from '@angular/core/testing';

import { BefAdatokService } from './bef-adatok.service';

describe('BefAdatokService', () => {
  let service: BefAdatokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BefAdatokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
