import { TestBed } from '@angular/core/testing';

import { PenzugyiAdatokService } from './penzugyi-adatok.service';

describe('PenzugyiAdatokService', () => {
  let service: PenzugyiAdatokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenzugyiAdatokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
