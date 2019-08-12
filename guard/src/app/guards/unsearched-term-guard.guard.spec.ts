import { TestBed, async, inject } from '@angular/core/testing';

import { UnsearchedTermGuardGuard } from './unsearched-term-guard.guard';

describe('UnsearchedTermGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsearchedTermGuardGuard]
    });
  });

  it('should ...', inject([UnsearchedTermGuardGuard], (guard: UnsearchedTermGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
