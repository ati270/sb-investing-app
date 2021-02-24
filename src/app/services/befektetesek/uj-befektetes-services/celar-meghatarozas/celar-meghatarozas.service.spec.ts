import { TestBed } from '@angular/core/testing';

import { CelarMeghatarozasService } from './celar-meghatarozas.service';

describe('CelarMeghatarozasService', () => {
  let service: CelarMeghatarozasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelarMeghatarozasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
