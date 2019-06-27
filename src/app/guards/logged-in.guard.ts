import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(private route: Router) {
  }

  checkAuthentication(path: string): boolean {
    const isLoggedIn = localStorage.getItem('isSignedIn') === 'true' ? true : false;

    if (!isLoggedIn) {
      this.route.navigate(['/login']);
    }

    return isLoggedIn;
  }

  canLoad(route: Route): boolean {
    return this.checkAuthentication(route.path);
  }

  canActivate(activatedRouter: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return this.checkAuthentication(activatedRouter.routeConfig.path);
  }
}
