import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  HouseMagicanComponent } from './components/house-magican/house-magican.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'api/magican',
    pathMatch: 'full'
  },
  {
    path: 'api/magican',
    component: HouseMagicanComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
