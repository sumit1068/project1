import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
console.log(route);
console.log(state);
  const isAuthenticated=false ;/* Implement your authentication logic */
  if (isAuthenticated) {
    // User is authenticated, allow access to the route
    return true;
  } else {
    // User is not authenticated, redirect to login or show an error message
    // Implement your desired behavior here
    return false;
  }
};

