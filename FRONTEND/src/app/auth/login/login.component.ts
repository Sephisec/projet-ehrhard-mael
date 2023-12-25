import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private readonly authService: AuthService) {}

  onLogin(username: string, password: string) {
    this.authService.signIn(username, password).subscribe();
  }
}
