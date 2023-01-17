import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeModuleComponent } from './home-module/home-module.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { SharedRoutes } from './shared-module.routing';
import { SEBIDisclosureComponent } from './sebi-disclosure/sebi-disclosure.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InvestorCharterComponent } from './investor-charter/investor-charter.component';



@NgModule({
  declarations: [
    FooterComponent,
    HomeModuleComponent,
    TopNavBarComponent,
    SEBIDisclosureComponent,
    PrivacyPolicyComponent,
    FaqsComponent,
    AboutUsComponent,
    InvestorCharterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutes,
   
  ],
  exports: [
    FooterComponent,
    HomeModuleComponent,
    TopNavBarComponent,
    
  ]
})
export class SharedModuleModule { }
