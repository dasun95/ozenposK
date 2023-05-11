import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { SecurityHeaderComponent } from './components/security-header/security-header.component';
import { SignUpMainPageComponent } from './components/sign-up-main-page/sign-up-main-page.component';
import { AccountSettingMainPageComponent } from './components/account-setting-main-page/account-setting-main-page.component';
import { AccountSettingPageComponent } from './components/account-setting-main-page/inner-items/account-setting-page/account-setting-page.component';
import {ShareModule} from "../share/share.module";
import { LoginMainPageComponent } from './components/login-main-page/login-main-page.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    SecurityComponent,
    SecurityHeaderComponent,
    SignUpMainPageComponent,
    AccountSettingMainPageComponent,
    AccountSettingPageComponent,
    LoginMainPageComponent,
    CarouselComponent
  ],
    imports: [
        CommonModule,
        SecurityRoutingModule,
      ShareModule,
        CarouselModule
    ]
})
export class SecurityModule { }
