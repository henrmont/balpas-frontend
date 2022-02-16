import { AccountInterceptor } from './components/account/account.interceptor';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);

import { SiteComponent } from './views/site/site.component';
import { LoginComponent } from './views/login/login.component';
import { ApiComponent } from './views/api/api.component';
import { RegisterComponent } from './views/register/register.component';
import { ResetComponent } from './views/reset/reset.component';
import { LogoutComponent } from './views/logout/logout.component';

import { AuthComponent } from './components/account/auth/auth.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { VerifyEmailComponent } from './components/account/verify-email/verify-email.component';
import { RequestResetPasswordComponent } from './components/account/request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './components/account/reset-password/reset-password.component';
import { ApiLayoutComponent } from './template/api-layout/api-layout.component';
import { HeaderComponent } from './template/api-layout/header/header.component';
import { FooterComponent } from './template/api-layout/footer/footer.component';
import { NavComponent } from './template/api-layout/nav/nav.component';
import { SidenavComponent } from './template/api-layout/sidenav/sidenav.component';
import { HomeComponent } from './views/api/home/home.component';
import { AgendaComponent } from './views/api/agenda/agenda.component';
import { PlantaoComponent } from './views/api/plantao/plantao.component';
import { NewPlantaoBtnComponent } from './components/plantao/new-plantao-btn/new-plantao-btn.component';
import { NewPlantaoBoxComponent } from './components/plantao/new-plantao-box/new-plantao-box.component';
import { ListPlantaoComponent } from './components/plantao/list-plantao/list-plantao.component';
import { InfoPlantaoBoxComponent } from './components/plantao/info-plantao-box/info-plantao-box.component';
import { EvalPlantaoBoxComponent } from './components/plantao/eval-plantao-box/eval-plantao-box.component';
import { EditPlantaoBoxComponent } from './components/plantao/edit-plantao-box/edit-plantao-box.component';
import { RemovePlantaoBoxComponent } from './components/plantao/remove-plantao-box/remove-plantao-box.component';
import { PegaplantaoComponent } from './views/api/pegaplantao/pegaplantao.component';
import { CalendarComponent } from './components/agenda/calendar/calendar.component';
import { FinanceiroComponent } from './views/api/financeiro/financeiro.component';
import { TodayBoxComponent } from './components/agenda/today-box/today-box.component';
import { AttachPlantaoBoxComponent } from './components/plantao/attach-plantao-box/attach-plantao-box.component';
import { AttachFileComponent } from './components/plantao/attach-file/attach-file.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { ListAttachComponent } from './components/plantao/list-attach/list-attach.component';
import { ListPlantaoFinanceiroComponent } from './components/financeiro/list-plantao-financeiro/list-plantao-financeiro.component';
import { TaxesPlantaoBoxComponent } from './components/financeiro/taxes-plantao-box/taxes-plantao-box.component';
import { NewTaxesPlantaoBoxComponent } from './components/financeiro/new-taxes-plantao-box/new-taxes-plantao-box.component';
import { ListTaxesComponent } from './components/financeiro/list-taxes/list-taxes.component';
import { EditTaxesPlantaoBoxComponent } from './components/financeiro/edit-taxes-plantao-box/edit-taxes-plantao-box.component';
import { RemoveTaxesPlantaoBoxComponent } from './components/financeiro/remove-taxes-plantao-box/remove-taxes-plantao-box.component';
import { StatusPaymentBoxComponent } from './components/financeiro/status-payment-box/status-payment-box.component';
import { ChartFinanceiroComponent } from './components/financeiro/chart-financeiro/chart-financeiro.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { ItemLiquidoComponent } from './components/home/item-liquido/item-liquido.component';
import { ItemImpostoComponent } from './components/home/item-imposto/item-imposto.component';
import { ItemFaturaComponent } from './components/home/item-fatura/item-fatura.component';
import { ItemPlantaoComponent } from './components/home/item-plantao/item-plantao.component';
import { AdminComponent } from './views/api/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    LoginComponent,
    AuthComponent,
    ApiComponent,
    RegisterComponent,
    CreateAccountComponent,
    VerifyEmailComponent,
    RequestResetPasswordComponent,
    ResetComponent,
    ResetPasswordComponent,
    LogoutComponent,
    ApiLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SidenavComponent,
    HomeComponent,
    AgendaComponent,
    PlantaoComponent,
    NewPlantaoBtnComponent,
    NewPlantaoBoxComponent,
    ListPlantaoComponent,
    InfoPlantaoBoxComponent,
    EvalPlantaoBoxComponent,
    EditPlantaoBoxComponent,
    RemovePlantaoBoxComponent,
    PegaplantaoComponent,
    CalendarComponent,
    FinanceiroComponent,
    TodayBoxComponent,
    AttachPlantaoBoxComponent,
    AttachFileComponent,
    ListAttachComponent,
    ListPlantaoFinanceiroComponent,
    TaxesPlantaoBoxComponent,
    NewTaxesPlantaoBoxComponent,
    ListTaxesComponent,
    EditTaxesPlantaoBoxComponent,
    RemoveTaxesPlantaoBoxComponent,
    StatusPaymentBoxComponent,
    ChartFinanceiroComponent,
    DashboardComponent,
    ItemLiquidoComponent,
    ItemImpostoComponent,
    ItemFaturaComponent,
    ItemPlantaoComponent,
    AdminComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule,
        MatSnackBarModule,
        MatTableModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        FlexLayoutModule,
        MatListModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgxMaskModule.forRoot(),
        NgxMaterialTimepickerModule,
        MatPaginatorModule,
        MatRadioModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FullCalendarModule,
        MatCardModule,
        MatProgressBarModule,
        MatSelectModule,
        MatExpansionModule,
        NgxChartsModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AccountInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
