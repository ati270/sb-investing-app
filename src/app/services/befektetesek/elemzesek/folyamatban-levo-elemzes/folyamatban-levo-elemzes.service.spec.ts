import { TestBed } from '@angular/core/testing';

import { FolyamatbanLevoElemzesService } from './folyamatban-levo-elemzes.service';

describe('FolyamatbanLevoElemzesService', () => {
  let service: FolyamatbanLevoElemzesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FolyamatbanLevoElemzesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
