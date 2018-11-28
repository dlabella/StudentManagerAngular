import { TestBed } from '@angular/core/testing';

import { PoblacionServiceService } from './poblacion-service.service';

describe('PoblacionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoblacionServiceService = TestBed.get(PoblacionServiceService);
    expect(service).toBeTruthy();
  });
});
