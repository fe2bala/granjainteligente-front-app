import { TestBed } from '@angular/core/testing';

import { BaiaService } from './baia.service';

describe('BaiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaiaService = TestBed.get(BaiaService);
    expect(service).toBeTruthy();
  });
});
