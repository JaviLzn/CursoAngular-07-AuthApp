import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
console.log('Next: ' + next);
    console.log('State: ' + state);

    if ( this.auth.isAuthenticated()) {
      console.log('Paso el guard');
      return true;
    } else {
      console.error('Bloqueado por el guard');
      return false;
    }
  }
}
