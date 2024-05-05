import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:"",
    loadChildren: () =>import('./customer/customer.module').then((m)=>m.CustomerModule)
  },
  {
    path:"admin",
    canActivate: [authGuard],
    loadChildren: () =>import('./admin/admin.module').then((m)=>m.AdminModule)
  },
  {
    path:"adminLogin",
    loadChildren: () =>import('./customer/customer.module').then((m)=>m.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
