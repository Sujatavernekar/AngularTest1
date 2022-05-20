import { TestBed } from '@angular/core/testing';

import { BankloanService } from './bankloan.service';

describe('BankloanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankloanService = TestBed.get(BankloanService);
    expect(service).toBeTruthy();
  });
});
