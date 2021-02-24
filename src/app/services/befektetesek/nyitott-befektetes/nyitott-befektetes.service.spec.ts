import { TestBed } from '@angular/core/testing';

import { NyitottBefektetesService } from './nyitott-befektetes.service';

describe('NyitottBefektetesService', () => {
  let service: NyitottBefektetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NyitottBefektetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
