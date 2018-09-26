import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
   }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
