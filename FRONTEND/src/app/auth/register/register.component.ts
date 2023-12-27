import { Component } from '@angular/core';
import { RegisterDto } from './register.dto';
import { AuthService } from '../../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  registerDto: RegisterDto;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
  ) {
    this.registerDto = new RegisterDto();
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      postCode: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sex: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
      login: ['', Validators.required],
      password: ['', Validators.required],
      confirmation: ['', Validators.required],
      telephone: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerDto).subscribe();
    }
  }
}
