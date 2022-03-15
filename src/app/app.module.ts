import { AccountInterceptor } from './components/account/account.interceptor';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
import { MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);

import { SiteComponent } from './views/site/site.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ResetComponent } from './views/reset/reset.component';
import { LogoutComponent } from './views/logout/logout.component';

import { AuthComponent } from './components/account/auth/auth.component';
import { RequestResetPasswordComponent } from './components/account/request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './components/account/reset-password/reset-password.component';
import { NewPlantaoBtnComponent } from './components/plantao/new-plantao-btn/new-plantao-btn.component';
import { NewPlantaoBoxComponent } from './components/plantao/new-plantao-box/new-plantao-box.component';
import { ListPlantaoComponent } from './components/plantao/list-plantao/list-plantao.component';
import { InfoPlantaoBoxComponent } from './components/plantao/info-plantao-box/info-plantao-box.component';
import { EvalPlantaoBoxComponent } from './components/plantao/eval-plantao-box/eval-plantao-box.component';
import { EditPlantaoBoxComponent } from './components/plantao/edit-plantao-box/edit-plantao-box.component';
import { RemovePlantaoBoxComponent } from './components/plantao/remove-plantao-box/remove-plantao-box.component';
import { CalendarComponent } from './components/agenda/calendar/calendar.component';
import { TodayBoxComponent } from './components/agenda/today-box/today-box.component';
import { AttachPlantaoBoxComponent } from './components/plantao/attach-plantao-box/attach-plantao-box.component';
import { AttachFileComponent } from './components/plantao/attach-file/attach-file.component';
import { MatProgressBarModule } from "@angular/material/progress-bar";
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
import { InscricaoBoxComponent } from './components/site/inscricao-box/inscricao-box.component';

import { AppLayoutComponent } from './template/app-layout/app-layout.component';
import { AppLayoutHeaderComponent } from './template/app-layout/app-layout-header/app-layout-header.component';
import { AppLayoutNavComponent } from './template/app-layout/app-layout-nav/app-layout-nav.component';
import { AppLayoutSidenavComponent } from './template/app-layout/app-layout-sidenav/app-layout-sidenav.component';
import { HomeComponent } from './views/home/home.component';
import { RegisterAccountComponent } from './components/account/register-account/register-account.component';
import { ConfirmEmailComponent } from './components/account/confirm-email/confirm-email.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { PlantaoComponent } from './views/plantao/plantao.component';
import { FaturaComponent } from './views/fatura/fatura.component';
import { PegaplantaoComponent } from './views/pegaplantao/pegaplantao.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminFaturaComponent } from './views/admin/admin-fatura/admin-fatura.component';
import { AdminPlantaoComponent } from './views/admin/admin-plantao/admin-plantao.component';
import { SettingsComponent } from './views/settings/settings.component';
import { SettingsProfileComponent } from './views/settings/settings-profile/settings-profile.component';
import { AdminInscricaoComponent } from './views/admin/admin-inscricao/admin-inscricao.component';
import { DocComponent } from './views/doc/doc.component';

// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    RequestResetPasswordComponent,
    ResetComponent,
    ResetPasswordComponent,
    LogoutComponent,
    NewPlantaoBtnComponent,
    NewPlantaoBoxComponent,
    ListPlantaoComponent,
    InfoPlantaoBoxComponent,
    EvalPlantaoBoxComponent,
    EditPlantaoBoxComponent,
    RemovePlantaoBoxComponent,
    CalendarComponent,
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
    InscricaoBoxComponent,

    AppLayoutComponent,
    AppLayoutHeaderComponent,
    AppLayoutNavComponent,
    AppLayoutSidenavComponent,
    HomeComponent,
    RegisterAccountComponent,
    ConfirmEmailComponent,
    ScheduleComponent,
    PlantaoComponent,
    FaturaComponent,
    PegaplantaoComponent,
    AdminComponent,
    AdminFaturaComponent,
    AdminPlantaoComponent,
    SettingsComponent,
    SettingsProfileComponent,
    AdminInscricaoComponent,
    DocComponent,
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
        NgxChartsModule,
        FontAwesomeModule,
        MatTabsModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AccountInterceptor, multi: true},
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
