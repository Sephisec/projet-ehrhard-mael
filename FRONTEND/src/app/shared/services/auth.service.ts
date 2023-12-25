import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { TOKEN_KEY_NAME } from '../constants/token-key-name.constant';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthResponse } from '../models/auth-response.model';
import { RegisterDto } from '../../auth/register/register.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly endpoint = `${environment.apiUrl}/auth`;
  constructor(
    private readonly http: HttpClient,
    private route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  signIn(login: string, password: string) {
    return this.http
      .post<AuthResponse>(`${this.endpoint}/signIn`, {
        login,
        password,
      })
      .pipe(
        tap((res) => {
          localStorage.setItem(TOKEN_KEY_NAME, res.access_token);
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        }),
      );
  }

  register(dto: RegisterDto) {
    return this.http
      .post<AuthResponse>(`${this.endpoint}/register`, { ...dto })
      .pipe(
        tap((res) => {
          localStorage.setItem(TOKEN_KEY_NAME, res.access_token);
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        }),
      );
  }

  isLoggedIn() {
    return localStorage.getItem(TOKEN_KEY_NAME) !== null;
  }
}
