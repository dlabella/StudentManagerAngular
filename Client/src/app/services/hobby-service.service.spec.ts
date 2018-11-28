import { TestBed } from '@angular/core/testing';

import { HobbyServiceService } from './hobby-service.service';

describe('HobbyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HobbyServiceService = TestBed.get(HobbyServiceService);
    expect(service).toBeTruthy();
  });
});
