import { TestBed } from '@angular/core/testing';

import { PenzugyekService } from '../penzugyek.service';

describe('PenzugyekService', () => {
  let service: PenzugyekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenzugyekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
