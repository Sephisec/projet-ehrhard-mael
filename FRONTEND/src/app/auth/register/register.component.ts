import { Component } from '@angular/core';
import { RegisterDto } from './register.dto';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerDto: RegisterDto;

  constructor(private readonly authService: AuthService) {
    this.registerDto = new RegisterDto();
  }

  onRegister() {
    console.log(this.registerDto);
    this.authService.register(this.registerDto).subscribe();
  }
}
