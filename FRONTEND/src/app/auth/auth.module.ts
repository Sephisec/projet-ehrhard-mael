import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth-routes.constant';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
