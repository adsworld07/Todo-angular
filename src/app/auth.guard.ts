

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const loggedInUserString = localStorage.getItem('loggedInUser');
    // if (loggedInUserString) {
    // //   const loggedInUser = JSON.parse(loggedInUserString);
    // } else {
    // }

    if (loggedInUserString) {
      return true;
    } else this.router.navigate(['/login']);
    return false;
  }
}
