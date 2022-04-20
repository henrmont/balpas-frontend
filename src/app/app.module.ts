import { AccountInterceptor } from './components/account/account.interceptor';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr, 'pt-BR');

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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
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
import { MatProgressBarModule } from "@angular/material/progress-bar";
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
import { PegaplantaoComponent } from './views/pegaplantao/pegaplantao.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminFaturaComponent } from './views/admin/admin-fatura/admin-fatura.component';
import { AdminPlantaoComponent } from './views/admin/admin-plantao/admin-plantao.component';
import { SettingsComponent } from './views/settings/settings.component';
import { SettingsProfileComponent } from './views/settings/settings-profile/settings-profile.component';
import { AdminInscricaoComponent } from './views/admin/admin-inscricao/admin-inscricao.component';
import { DocComponent } from './views/doc/doc.component';
import { AdminNewPlantaoBoxComponent } from './components/plantao/admin-new-plantao-box/admin-new-plantao-box.component';
import { AdminEditPlantaoBoxComponent } from './components/plantao/admin-edit-plantao-box/admin-edit-plantao-box.component';
import { AdminDeletePlantaoBoxComponent } from './components/plantao/admin-delete-plantao-box/admin-delete-plantao-box.component';
import { AdminValidatePlantaoBoxComponent } from './components/plantao/admin-validate-plantao-box/admin-validate-plantao-box.component';
import { AdminStatusPlantaoBoxComponent } from './components/plantao/admin-status-plantao-box/admin-status-plantao-box.component';
import { AdminTaxesPlantaoBoxComponent } from './components/plantao/admin-taxes-plantao-box/admin-taxes-plantao-box.component';
import { AdminNewTaxeBoxComponent } from './components/taxe/admin-new-taxe-box/admin-new-taxe-box.component';
import { AdminEditTaxeBoxComponent } from './components/taxe/admin-edit-taxe-box/admin-edit-taxe-box.component';
import { AdminDeleteTaxeBoxComponent } from './components/taxe/admin-delete-taxe-box/admin-delete-taxe-box.component';
import { AdminAttachPlantaoBoxComponent } from './components/plantao/admin-attach-plantao-box/admin-attach-plantao-box.component';
import { AdminDeleteAttachBoxComponent } from './components/attach/admin-delete-attach-box/admin-delete-attach-box.component';
import { UserNewPlantaoBoxComponent } from './components/plantao/user-new-plantao-box/user-new-plantao-box.component';
import { UserDeletePlantaoBoxComponent } from './components/plantao/user-delete-plantao-box/user-delete-plantao-box.component';
import { UserAttachPlantaoBoxComponent } from './components/plantao/user-attach-plantao-box/user-attach-plantao-box.component';
import { UserGetPlantaoBoxComponent } from './components/plantao/user-get-plantao-box/user-get-plantao-box.component';
import { InvoiceComponent } from './views/invoice/invoice.component';
import { TaxesChartComponent } from './components/plantao/taxes-chart/taxes-chart.component';
import { UserTodayPlantaoBoxComponent } from './components/plantao/user-today-plantao-box/user-today-plantao-box.component';
import { AdminNewInvoiceBoxComponent } from './components/invoice/admin-new-invoice-box/admin-new-invoice-box.component';
import { AdminInvoiceComponent } from './views/admin/admin-invoice/admin-invoice.component';
import { AdminEditInvoiceBoxComponent } from './components/invoice/admin-edit-invoice-box/admin-edit-invoice-box.component';
import { AdminDeleteInvoiceBoxComponent } from './components/invoice/admin-delete-invoice-box/admin-delete-invoice-box.component';
import { AdminStatusInvoiceBoxComponent } from './components/invoice/admin-status-invoice-box/admin-status-invoice-box.component';
import { AdminUsersComponent } from './views/admin/admin-users/admin-users.component';
import { AdminDashboardComponent } from './views/admin/admin-dashboard/admin-dashboard.component';
import { SettingsPasswordComponent } from './views/settings/settings-password/settings-password.component';
import { ImageProfileBoxComponent } from './components/account/image-profile-box/image-profile-box.component';
import { DeleteImageProfileBoxComponent } from './components/account/delete-image-profile-box/delete-image-profile-box.component';
import { AdminEditUserBoxComponent } from './components/account/admin-edit-user-box/admin-edit-user-box.component';
import { AdminDeleteUserBoxComponent } from './components/account/admin-delete-user-box/admin-delete-user-box.component';
import { AdminTypeUserBoxComponent } from './components/account/admin-type-user-box/admin-type-user-box.component';
import { AdminValidateUserBoxComponent } from './components/account/admin-validate-user-box/admin-validate-user-box.component';
import { AdminRolesUserBoxComponent } from './components/account/admin-roles-user-box/admin-roles-user-box.component';
import { UserDashboardChartComponent } from './components/home/user-dashboard-chart/user-dashboard-chart.component';
import { AdminDashboardChartComponent } from './components/home/admin-dashboard-chart/admin-dashboard-chart.component';

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
    PegaplantaoComponent,
    AdminComponent,
    AdminFaturaComponent,
    AdminPlantaoComponent,
    SettingsComponent,
    SettingsProfileComponent,
    AdminInscricaoComponent,
    DocComponent,
    AdminNewPlantaoBoxComponent,
    AdminEditPlantaoBoxComponent,
    AdminDeletePlantaoBoxComponent,
    AdminValidatePlantaoBoxComponent,
    AdminStatusPlantaoBoxComponent,
    AdminTaxesPlantaoBoxComponent,
    AdminNewTaxeBoxComponent,
    AdminEditTaxeBoxComponent,
    AdminDeleteTaxeBoxComponent,
    AdminAttachPlantaoBoxComponent,
    AdminDeleteAttachBoxComponent,
    UserNewPlantaoBoxComponent,
    UserDeletePlantaoBoxComponent,
    UserAttachPlantaoBoxComponent,
    UserGetPlantaoBoxComponent,
    InvoiceComponent,
    TaxesChartComponent,
    UserTodayPlantaoBoxComponent,
    AdminNewInvoiceBoxComponent,
    AdminInvoiceComponent,
    AdminEditInvoiceBoxComponent,
    AdminDeleteInvoiceBoxComponent,
    AdminStatusInvoiceBoxComponent,
    AdminUsersComponent,
    AdminDashboardComponent,
    SettingsPasswordComponent,
    ImageProfileBoxComponent,
    DeleteImageProfileBoxComponent,
    AdminEditUserBoxComponent,
    AdminDeleteUserBoxComponent,
    AdminTypeUserBoxComponent,
    AdminValidateUserBoxComponent,
    AdminRolesUserBoxComponent,
    UserDashboardChartComponent,
    AdminDashboardChartComponent,
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
        MatTabsModule,
        ImageCropperModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AccountInterceptor, multi: true},
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
