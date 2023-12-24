import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routesConstant } from './shared/constants/routes.constant';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    CatalogueComponent,
    AuthComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routesConstant),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
