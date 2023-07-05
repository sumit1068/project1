import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canActiveChildAuthGuard } from './can-active-child-auth.guard';

describe('canActiveChildAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canActiveChildAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
