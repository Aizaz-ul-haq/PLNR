import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AdminfaqsComponent } from './adminfaqs/adminfaqs.component';
import { AdmintestimonialsComponent } from './admintestimonials/admintestimonials.component';
import { LayoutComponent } from './layout/layout.component';
export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [],
      // { path: 'overview', component: DashboardOverviewComponent },
    },
    {
        path: 'adminfaqs',
        component: AdminfaqsComponent
    },
    {
        path: 'admintestimonials',
        component: AdmintestimonialsComponent
    }
];

export const AdminModulePanelRoutes: ModuleWithProviders<any> = RouterModule.forChild(
  routes
);