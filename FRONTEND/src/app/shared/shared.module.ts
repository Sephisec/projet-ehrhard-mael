import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpErrorHandler } from './http-error.handler';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductItemComponent,
    PageNotFoundComponent,
    ErrorDialogComponent,
  ],
  imports: [CommonModule, FormsModule, MatDialogModule, MatButtonModule],
  exports: [
    ProductItemComponent,
    PageNotFoundComponent,
    CommonModule,
    FormsModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: HttpErrorHandler }],
})
export class SharedModule {}
