import { TestBed } from '@angular/core/testing';

import { ManagelesService } from './manageles.service';

describe('ManagelesService', () => {
  let service: ManagelesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagelesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
