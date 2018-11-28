import { TestBed } from '@angular/core/testing';

import { SexoServiceService } from './sexo-service.service';

describe('SexoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SexoServiceService = TestBed.get(SexoServiceService);
    expect(service).toBeTruthy();
  });
});
