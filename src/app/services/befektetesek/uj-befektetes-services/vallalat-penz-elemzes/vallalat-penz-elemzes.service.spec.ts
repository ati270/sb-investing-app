import { TestBed } from '@angular/core/testing';

import { VallalatPenzElemzesService } from './vallalat-penz-elemzes.service';

describe('VallalatPenzElemzesService', () => {
  let service: VallalatPenzElemzesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VallalatPenzElemzesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
