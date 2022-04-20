import { DocComponent } from './views/doc/doc.component';
import { AdminInscricaoComponent } from './views/admin/admin-inscricao/admin-inscricao.component';
import { SettingsProfileComponent } from './views/settings/settings-profile/settings-profile.component';
import { SettingsComponent } from './views/settings/settings.component';
import { AdminPlantaoComponent } from './views/admin/admin-plantao/admin-plantao.component';
import { AdminFaturaComponent } from './views/admin/admin-fatura/admin-fatura.component';
import { AdminComponent } from './views/admin/admin.component';
import { PegaplantaoComponent } from './views/pegaplantao/pegaplantao.component';
import { PlantaoComponent } from './views/plantao/plantao.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { HomeComponent } from './views/home/home.component';
import { AppLayoutComponent } from './template/app-layout/app-layout.component';
import { LogoutComponent } from './views/logout/logout.component';
import { ResetComponent } from './views/reset/reset.component';
import { RegisterComponent } from './views/register/register.component';
import { AccountGuard } from './components/account/account.guard';
import { LoginComponent } from './views/login/login.component';
import { SiteComponent } from './views/site/site.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocHomeComponent } from './views/doc/doc-home/doc-home.component';
import { InvoiceComponent } from './views/invoice/invoice.component';
import { AdminInvoiceComponent } from './views/admin/admin-invoice/admin-invoice.component';
import { AdminUsersComponent } from './views/admin/admin-users/admin-users.component';
import { AdminDashboardComponent } from './views/admin/admin-dashboard/admin-dashboard.component';
import { SettingsPasswordComponent } from './views/settings/settings-password/settings-password.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'agenda',
    component: AppLayoutComponent,
    children: [
      { path: '', component: ScheduleComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'plantao',
    component: AppLayoutComponent,
    children: [
      { path: '', component: PlantaoComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'fatura',
    component: AppLayoutComponent,
    children: [
      { path: '', component: InvoiceComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'pega/plantao',
    component: AppLayoutComponent,
    children: [
      { path: '', component: PegaplantaoComponent },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'settings',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: SettingsComponent,
        children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
          { path: 'profile', component: SettingsProfileComponent },
          { path: 'password', component: SettingsPasswordComponent },
          // { path: 'plantao', component: AdminPlantaoComponent },
        ]
      }
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'admin',
    component: AppLayoutComponent,
    children: [
      { 
        path: '',
        component: AdminComponent,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'fatura', component: AdminInvoiceComponent },
          { path: 'plantao', component: AdminPlantaoComponent, data: [ { isAdmin: true } ] },
          { path: 'inscricao', component: AdminInscricaoComponent },
          { path: 'users', component: AdminUsersComponent },
          { path: 'dashboard', component: AdminDashboardComponent },
        ]
      },
    ],
    canActivate: [AccountGuard]
  },
  {
    path: 'doc',
    component: AppLayoutComponent,
    children: [
      { 
        path: '',
        component: DocComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: DocHomeComponent },
        ]
      },
    ],
    canActivate: [AccountGuard]
  },
  // {
  //   path: 'watch',
  //   component: AppLayoutComponent,
  //   data: [
  //     { destack: true }
  //   ],
  //   children: [
  //     { path: '', component: WatchComponent },
  //   ],
  //   canActivate: [AccountGuard]
  // },
  // {
  //   path: 'profile',
  //   component: AppLayoutComponent,
  //   data: [
  //     { destack: false }
  //   ],
  //   children: [
  //     { path: '', component: ProfileComponent },
  //     { path: ':alias', component: ProfileComponent },
  //   ],
  //   canActivate: [AccountGuard]
  // },
  // 
  {
    path: '',
    component: SiteComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'inscricao',
    component: SiteComponent,
  },
  {
    path: 'register/account',
    children: [
      { path: '', component: RegisterComponent },
      { path: ':token', component: RegisterComponent }
    ]
  },
  {
    path: 'reset/password',
    children: [
      { path: '', component: ResetComponent },
      { path: ':token', component: ResetComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
