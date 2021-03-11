import { TestBed } from '@angular/core/testing';

import { FigyeloListaService } from './figyelo-lista.service';

describe('FigyeloListaService', () => {
  let service: FigyeloListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FigyeloListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
