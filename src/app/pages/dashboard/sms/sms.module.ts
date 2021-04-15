import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from 'src/app/shared/component/sidebar/sidebar.module';
import { SmsComponent } from './sms.component';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: "",
    component: SmsComponent
  }
];

@NgModule({
  declarations: [SmsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SidebarModule,
    MatCheckboxModule
  ]
})
export class SmsModule { }
