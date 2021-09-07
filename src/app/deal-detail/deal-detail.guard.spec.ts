import { TestBed } from '@angular/core/testing';

import { DealDetailGuard } from './deal-detail.guard';

describe('DealDetailGuard', () => {
  let guard: DealDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DealDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
