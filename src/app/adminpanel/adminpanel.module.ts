import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AdmintestimonialsComponent } from './admintestimonials/admintestimonials.component';
import { AdminfaqsComponent } from './adminfaqs/adminfaqs.component';
import { AdminModulePanelRoutes } from './adminpanel.routing';



@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
    AdmintestimonialsComponent,
    AdminfaqsComponent
  ],
  imports: [
    CommonModule,
    AdminModulePanelRoutes
  ],
  exports: [
    LoginComponent,
    LayoutComponent,
    AdmintestimonialsComponent,
    AdminfaqsComponent,
  ]
})
export class AdminpanelModule { }
