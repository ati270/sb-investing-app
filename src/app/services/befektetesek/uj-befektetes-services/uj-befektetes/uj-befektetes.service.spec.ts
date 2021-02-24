import { TestBed } from '@angular/core/testing';

import { UjBefektetesService } from './uj-befektetes.service';

describe('UjBefektetesService', () => {
  let service: UjBefektetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UjBefektetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
