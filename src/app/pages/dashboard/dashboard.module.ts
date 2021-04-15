import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from 'src/app/shared/component/header/header.component';
import { SidebarModule } from 'src/app/shared/component/sidebar/sidebar.module';
import { SmsComponent } from './sms/sms.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full"},
      {
        path: "home",
        loadChildren: () => 
        import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: "sms",
        loadChildren: () => 
        import('./sms/sms.module').then(m => m.SmsModule)
      }

    ]
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
