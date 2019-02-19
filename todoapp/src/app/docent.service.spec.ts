import { TestBed } from '@angular/core/testing';

import { DocentService } from './docent.service';

describe('DocentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocentService = TestBed.get(DocentService);
    expect(service).toBeTruthy();
  });
});
