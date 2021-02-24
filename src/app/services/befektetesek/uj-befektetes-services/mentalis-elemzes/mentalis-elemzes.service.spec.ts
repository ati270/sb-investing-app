import { TestBed } from '@angular/core/testing';

import { MentalisElemzesService } from './mentalis-elemzes.service';

describe('MentalisElemzesService', () => {
  let service: MentalisElemzesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentalisElemzesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
