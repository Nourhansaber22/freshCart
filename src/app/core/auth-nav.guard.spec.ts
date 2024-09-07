import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authNavGuard } from './auth-nav.guard';

describe('authNavGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authNavGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
