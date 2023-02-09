import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent
  }
];

export const AdminRoutingModule: ModuleWithProviders<any> = RouterModule.forChild(
    routes
  );