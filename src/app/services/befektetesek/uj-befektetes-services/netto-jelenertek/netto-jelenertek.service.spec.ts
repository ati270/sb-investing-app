import { TestBed } from '@angular/core/testing';

import { NettoJelenertekService } from './netto-jelenertek.service';

describe('NettoJelenertekService', () => {
  let service: NettoJelenertekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NettoJelenertekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
