import { TestBed } from '@angular/core/testing';

import { IluminacaoService } from './iluminacao.service';

describe('IluminacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IluminacaoService = TestBed.get(IluminacaoService);
    expect(service).toBeTruthy();
  });
});
