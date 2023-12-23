import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const TOKEN_KEY_NAME = 'auth_token';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(TOKEN_KEY_NAME);
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(request).pipe(
      tap((event: HttpEvent<unknown>) => {
        if (event instanceof HttpResponse) {
          const authorizationHeader = event.headers.get('Authorization');
          if (authorizationHeader) {
            const tab = authorizationHeader.split(/Bearer\s+(.*)$/i);
            if (tab.length > 1) {
              localStorage.setItem(TOKEN_KEY_NAME, tab[1]);
            }
          }
        }
      }),
    );
  }
}
