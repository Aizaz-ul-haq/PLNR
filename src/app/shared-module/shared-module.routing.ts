import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeModuleComponent } from './home-module/home-module.component';
import { ModuleWithProviders } from '@angular/core';
import { SEBIDisclosureComponent } from './sebi-disclosure/sebi-disclosure.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InvestorCharterComponent } from './investor-charter/investor-charter.component';
import { StartHereComponent } from './start-here/start-here.component';
import { TestimonialsComponent } from './../shared_public/testimonials/testimonials.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeModuleComponent,
        children: [],
      // { path: 'overview', component: DashboardOverviewComponent },
    },
    {
        path: 'sebi-disclosure',
        component: SEBIDisclosureComponent
    },
    {
        path: 'faqs',
        component: FaqsComponent
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'investor-charter',
        component: InvestorCharterComponent
    },
    {
        path: 'start-here',
        component: StartHereComponent
    },
    {
        path: 'testimonials',
        component: TestimonialsComponent
    }
];

export const SharedRoutes: ModuleWithProviders<any> = RouterModule.forChild(
  routes
);