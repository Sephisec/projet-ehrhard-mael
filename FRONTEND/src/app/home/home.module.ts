import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home-routes.constant';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(homeRoutes)],
})
export class HomeModule {}
