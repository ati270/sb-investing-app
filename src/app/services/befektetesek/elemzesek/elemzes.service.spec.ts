import { TestBed } from '@angular/core/testing';

import { ElemzesService } from './elemzes.service';

describe('ElemzesService', () => {
  let service: ElemzesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElemzesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
