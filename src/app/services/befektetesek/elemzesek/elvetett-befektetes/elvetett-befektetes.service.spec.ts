import { TestBed } from '@angular/core/testing';

import { ElvetettBefektetesService } from './elvetett-befektetes.service';

describe('ElvetettBefektetesService', () => {
  let service: ElvetettBefektetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElvetettBefektetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
