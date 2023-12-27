import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@Injectable()
export class HttpErrorHandler implements ErrorHandler {
  constructor(private readonly dialog: MatDialog) {}
  handleError(error: unknown): void {
    if (error instanceof HttpErrorResponse) {
      this.dialog.open(ErrorDialogComponent, {
        data: { message: error.message },
      });
    } else {
      throw error;
    }
  }
}
