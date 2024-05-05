import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { HomeComponent } from './pages/home/home.component';
import { FindTicketsComponent } from './pages/find-tickets/find-tickets.component';
import { TrainRunComponent } from './pages/train-run/train-run.component';

const routes: Routes = [
  {
    path:"",
    component:CustomerComponent , children:[
      {
        path:"",
        component:HomeComponent,
      },
      {
        path:"train-run",
        component:TrainRunComponent,
      },
      {
        path:"timve",
        component:FindTicketsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
