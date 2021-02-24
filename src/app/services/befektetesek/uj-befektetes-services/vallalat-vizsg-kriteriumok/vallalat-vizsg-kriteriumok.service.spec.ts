import { TestBed } from '@angular/core/testing';

import { VallalatVizsgKriteriumokService } from './vallalat-vizsg-kriteriumok.service';

describe('VallalatVizsgKriteriumokService', () => {
  let service: VallalatVizsgKriteriumokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VallalatVizsgKriteriumokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
