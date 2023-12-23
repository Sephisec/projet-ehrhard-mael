import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  username: string;
  password: string;
  logged: boolean;

  constructor(private readonly authService: AuthService) {}

  onLogin(username: string, password: string) {
    console.log('test');
    this.authService
      .signIn(username, password)
      .subscribe(() => (this.logged = true));
  }
}
