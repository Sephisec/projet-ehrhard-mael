import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  username: string;
  password: string;

  constructor(private readonly authService: AuthService) {}

  onLogin(username: string, password: string) {
    this.authService
      .signIn(username, password)
      .subscribe(() => console.log('LOGGED'));
  }
}
