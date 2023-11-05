import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'tree', loadChildren: () => import('./tree/tree.module').then(m => m.TreeModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
