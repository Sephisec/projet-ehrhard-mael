import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-confirmation-dialog',
  template: `
    <h1>Confirm Payment</h1>
    <p>Are you sure you want to proceed with the payment?</p>
    <button mat-button color="primary" (click)="confirm()">Confirm</button>
    <button mat-button color="warn" (click)="cancel()">Cancel</button>
  `,
})
export class PaymentConfirmationDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<PaymentConfirmationDialogComponent>,
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
