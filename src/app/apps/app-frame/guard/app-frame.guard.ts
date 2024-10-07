import { CanActivateFn } from '@angular/router';

export const appFrameGuard: CanActivateFn = (route, state) => {
  return true;
};
