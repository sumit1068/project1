import { CanActivateFn } from '@angular/router';

export const canActiveChildAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
