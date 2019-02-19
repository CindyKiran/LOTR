import { TestBed } from '@angular/core/testing';

import { VakService } from './vak.service';

describe('VakService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VakService = TestBed.get(VakService);
    expect(service).toBeTruthy();
  });
});
