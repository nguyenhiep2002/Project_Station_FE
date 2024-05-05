import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HearderComponent } from './layouts/hearder/hearder.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FindTicketsComponent } from './pages/find-tickets/find-tickets.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { TrainRunComponent } from './pages/train-run/train-run.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [
    CustomerComponent,
    HearderComponent,
    FooterComponent,
    HomeComponent,
    FindTicketsComponent,
    TrainRunComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NzButtonModule,
    NzAutocompleteModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzDatePickerModule,
    ReactiveFormsModule,
    NzRadioModule,
    NzSelectModule,
    NzIconModule
  ]
})
export class CustomerModule { }
