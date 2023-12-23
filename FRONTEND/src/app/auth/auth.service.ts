import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { TOKEN_KEY_NAME } from '../constants/token-key-name.constant';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly endpoint = `${environment.apiUrl}/auth`;
  constructor(private readonly http: HttpClient) {}

  signIn(login: string, password: string) {
    return this.http
      .post<User>(`${this.endpoint}/signIn`, {
        login,
        password,
      })
      .pipe(
        tap((res: any) => {
          localStorage.setItem(TOKEN_KEY_NAME, res.access_token);
        }),
      );
  }
}
