import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecurityComponent} from './security.component';
import {SignUpMainPageComponent} from "./components/sign-up-main-page/sign-up-main-page.component";
import {LoginMainPageComponent} from "./components/login-main-page/login-main-page.component";
import {
  AccountSettingMainPageComponent
} from "./components/account-setting-main-page/account-setting-main-page.component";
import {
  AccountSettingPageComponent
} from "./components/account-setting-main-page/inner-items/account-setting-page/account-setting-page.component";

const routes: Routes = [
  {
    path: '', component: SecurityComponent, children: [
      {path: '', redirectTo: '/security/login', pathMatch: 'full'},
      {path: 'login', component: LoginMainPageComponent},
      {path: 'sign-up', component: SignUpMainPageComponent},
      {path: 'account-settings', component: AccountSettingMainPageComponent},
      {
        path: 'settings', component: AccountSettingPageComponent, children: []
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {
}
