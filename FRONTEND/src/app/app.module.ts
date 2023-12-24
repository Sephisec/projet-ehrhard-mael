import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routes.constant';
import { CatalogueModule } from './catalogue/catalogue.module';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CartModule,
    CatalogueModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
