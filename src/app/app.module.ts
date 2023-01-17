import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModuleModule } from './shared-module/shared-module.module';
// import { FooterComponent } from './shared-module/footer/footer.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModuleModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzTabsModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
    NzSliderModule,
    NzDrawerModule,
    NzDescriptionsModule,
    NzTableModule,
    NzDatePickerModule,
    NzCardModule,
    NzDropDownModule,
    NzSelectModule,
    NzBadgeModule,
    NzMessageModule,
    NzDividerModule,
    NzSpinModule,
    NzListModule,
    NzAvatarModule,
    NzStepsModule,
    NzNotificationModule,
    NzEmptyModule,
    NzPopoverModule,
    NzFormModule,
    NzRadioModule,
    NzAffixModule,
    NzSkeletonModule,
    NzCheckboxModule,
    NzCalendarModule,
    NzTagModule,
    NzPaginationModule,
    NzUploadModule,
    NzRateModule,
    NzTimePickerModule,
    NzAlertModule,
    NzInputNumberModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  exports: [NzGridModule,
    NzIconModule,
    NzMenuModule,
    NzTabsModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
    NzSliderModule,
    NzDrawerModule,
    NzDescriptionsModule,
    NzTableModule,
    NzDatePickerModule,
    NzCardModule,
    NzDropDownModule,
    NzSelectModule,
    NzBadgeModule,
    NzMessageModule,
    NzDividerModule,
    NzSpinModule,
    NzListModule,
    NzAvatarModule,
    NzStepsModule,
    NzNotificationModule,
    NzEmptyModule,
    NzPopoverModule,
    NzFormModule,
    NzRadioModule,
    NzAffixModule,
    NzSkeletonModule,
    NzCheckboxModule,
    NzCalendarModule,
    NzTagModule,
    NzPaginationModule,
    NzUploadModule,
    NzRateModule,
    NzTimePickerModule,
    NzAlertModule,
    NzInputNumberModule]
})
export class AppModule { }
