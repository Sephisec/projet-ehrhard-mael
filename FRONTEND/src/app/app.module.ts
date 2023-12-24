import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './catalogue/product-item/product-item.component';
import { CatalogueComponent } from './catalogue/catalogue/catalogue.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routes.constant';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { CatalogueSearchComponent } from './catalogue/catalogue-search/catalogue-search.component';
import { CatalogueModule } from './catalogue/catalogue.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    CatalogueComponent,
    AuthComponent,
    PageNotFoundComponent,
    CatalogueSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CatalogueModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
