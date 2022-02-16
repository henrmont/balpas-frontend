import { AdminComponent } from './views/api/admin/admin.component';
import { PlantaoComponent } from './views/api/plantao/plantao.component';
import { AgendaComponent } from './views/api/agenda/agenda.component';
import { HomeComponent } from './views/api/home/home.component';
import { LogoutComponent } from './views/logout/logout.component';
import { ResetComponent } from './views/reset/reset.component';
import { RegisterComponent } from './views/register/register.component';
import { AccountGuard } from './components/account/account.guard';
import { ApiComponent } from './views/api/api.component';
import { LoginComponent } from './views/login/login.component';
import { SiteComponent } from './views/site/site.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PegaplantaoComponent} from "./views/api/pegaplantao/pegaplantao.component";
import {FinanceiroComponent} from "./views/api/financeiro/financeiro.component";

const routes: Routes = [
  {
    path: 'api',
    component: ApiComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'agenda', component: AgendaComponent },
      { path: 'plantao', component: PlantaoComponent },
      { path: 'pega/plantao', component: PegaplantaoComponent },
      { path: 'financeiro', component: FinanceiroComponent },
      { path: 'admin', component: AdminComponent }
    ],
    canActivate: [AccountGuard]
  },
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
