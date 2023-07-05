import { CanActivateFn } from '@angular/router';

export const auth3Guard: CanActivateFn = (route, state) => {
  return true;
};
