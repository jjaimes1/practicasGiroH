import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgxMasonryModule } from 'ngx-masonry';
import { ScrollspyDirective } from './shared/scrollspy.directive';

import { AccountMembersComponent } from './core/components/account-members/account-members.component';
import { AccountMessagesComponent } from './core/components/account-messages/account-messages.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { AccountPaymentsComponent } from './core/components/account-payments/account-payments.component';
import { AccountProfileComponent } from './core/components/account-profile/account-profile.component';
import { AccountSettingComponent } from './core/components/account-setting/account-setting.component';
import { AccountWorksComponent } from './core/components/account-works/account-works.component';
import { AuthCoverLoginComponent } from './auth/auth-cover-login/auth-cover-login.component';
import { AuthCoverRePasswordComponent } from './auth/auth-cover-re-password/auth-cover-re-password.component';
import { AuthCoverSignupComponent } from './auth/auth-cover-signup/auth-cover-signup.component';
import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';
import { HelpcenterFaqsComponent } from './core/components/helpcenter-faqs/helpcenter-faqs.component';
import { HelpcenterGuidesComponent } from './core/components/helpcenter-guides/helpcenter-guides.component';
import { HelpcenterOverviewComponent } from './core/components/helpcenter-overview/helpcenter-overview.component';
import { HelpcenterSupportRequestComponent } from './core/components/helpcenter-support-request/helpcenter-support-request.component';

import { IndexAppsComponent } from './core/components/index-apps/index-apps.component';
import { PageContactDetailComponent } from './core/components/page-contact-detail/page-contact-detail.component';
import { PageInvoiceComponent } from './core/components/page-invoice/page-invoice.component';
import { PagePrivacyComponent } from './core/components/page-privacy/page-privacy.component';
import { PageTermsComponent } from './core/components/page-terms/page-terms.component';
import { ShopCartComponent } from './core/components/shop-cart/shop-cart.component';
import { ShopCheckoutsComponent } from './core/components/shop-checkouts/shop-checkouts.component';
import { ShopMyaccountComponent } from './core/components/shop-myaccount/shop-myaccount.component';
import { ShopProductDetailComponent } from './core/components/shop-product-detail/shop-product-detail.component';
import { ShopProductsComponent } from './core/components/shop-products/shop-products.component';
import { FeatherModule } from 'angular-feather';

import { allIcons } from 'angular-feather/icons';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonComponent } from './common/common.component';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthCoverSignupPassComponent } from './auth/auth-cover-signup-pass/auth-cover-signup-pass.component';
import { SuccesComponent } from './alerts/succes/succes.component';
import { ErrorComponent } from './alerts/error/error.component';
import { CorporateComponent } from './components/dashboard/corporate/corporate.component';
import { PersonalComponent } from './components/dashboard/personal/personal.component';
import { SelfAttendanceComponent } from './components/attendance/self-attendance/self-attendance.component';
import { CorporateAttendanceComponent } from './components/attendance/corporate-attendance/corporate-attendance.component';
import { CorporateDocumentsComponent } from './components/documents/corporate-documents/corporate-documents.component';
import { MyDocumentsComponent } from './components/documents/my-documents/my-documents.component';
import { EmployeesComponent } from './components/documents/employees/employees.component';
import { TeamStatusComponent } from './components/team/team-status/team-status.component';
import { TeamRolesComponent } from './components/team/team-roles/team-roles.component';
import { FunctionalitiesComponent } from './functionalities/functionalities.component';
import { IntegrationsComponent } from './components/settings/integrations/integrations.component';
import { SubscriptionComponent } from './components/settings/subscription/subscription.component';
import { SettingRolesComponent } from './components/settings/setting-roles/setting-roles.component';
import { BusinessComponent } from './components/settings/business/business.component';
import { RequestsComponent } from './components/requests/requests.component';
import { ModalComponent } from './components/attendance/corporate-attendance/modal/modal.component';
import { ModalSelfComponent } from './components/attendance/self-attendance/modal-self/modal-self.component';
import { ModalCorporateDocumentComponent } from './components/documents/corporate-documents/modal-corporate-document/modal-corporate-document.component';
import { AbsencesComponent } from './components/calendar/absences/absences.component';
import { PresenceComponent } from './components/calendar/presence/presence.component';
import { ShiftsComponent } from './components/calendar/shifts/shifts.component';
import { NotificationsComponent } from './components/settings/notifications/notifications.component';
import { PersonalizeComponent } from './components/settings/personalize/personalize.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ModalCalendarioComponent } from './components/settings/personalize/Modales/modal-calendario/modal-calendario.component';
import { ModalHorarioComponent } from './components/settings/personalize/Modales/modal-horario/modal-horario.component';
import { ModalConvenioComponent } from './components/settings/personalize/Modales/modal-convenio/modal-convenio.component';
import { ModalTiposComponent } from './components/settings/personalize/Modales/modal-tipos/modal-tipos.component';
import { ModalReglasComponent } from './components/settings/personalize/Modales/modal-reglas/modal-reglas.component';
import { ModalSolicitudesComponent } from './components/settings/personalize/Modales/modal-solicitudes/modal-solicitudes.component';
import { ModalPersonalComponent } from './components/dashboard/modal-personal/modal-personal.component';
import { ModalDashboardComponent } from './components/dashboard/modal-dashboard/modal-dashboard.component';
import { ModalCentrosComponent } from './components/settings/business/Modales/modal-centros/modal-centros.component';
import { ModalSedesComponent } from './components/settings/business/Modales/modal-sedes/modal-sedes.component';
import { ModalHabilidadComponent } from './components/settings/business/Modales/modal-habilidad/modal-habilidad.component';
import { ModalAtributosComponent } from './components/settings/business/Modales/modal-atributos/modal-atributos.component';
import { ModalDepartamentosComponent } from './components/settings/business/Modales/modal-departamentos/modal-departamentos.component';
import { ModalCargosComponent } from './components/settings/business/Modales/modal-cargos/modal-cargos.component';
import { ModalRolComponent } from './components/settings/setting-roles/modal-rol/modal-rol.component';
import { ModalMaternidadComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-maternidad/modal-maternidad.component';
import { ModalEnfermedadComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-enfermedad/modal-enfermedad.component';
import { ModalDefuncionComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-defuncion/modal-defuncion.component';
import { ModalBodaComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-boda/modal-boda.component';
import { ModalPaternidadComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-paternidad/modal-paternidad.component';
import { ModalTreballFestiuComponent } from './components/settings/personalize/Modales/modal-presencia/modal-treball-festiu/modal-treball-festiu.component';
import { ModalExtraordinariasComponent } from './components/settings/personalize/Modales/modal-presencia/modal-extraordinarias/modal-extraordinarias.component';
import { ModalComplementariasComponent } from './components/settings/personalize/Modales/modal-presencia/modal-complementarias/modal-complementarias.component';
import { ModalAceptacioVoluntariaComponent } from './components/settings/personalize/Modales/modal-presencia/modal-aceptacio-voluntaria/modal-aceptacio-voluntaria.component';
import { ModalFuerzamajorComponent } from './components/settings/personalize/Modales/modal-presencia/modal-fuerzamajor/modal-fuerzamajor.component';
import { ModalCompensarComponent } from './components/settings/personalize/Modales/modal-presencia/modal-compensar/modal-compensar.component';
import { ModalAsignacionesComponent } from './components/settings/personalize/Modales/modal-asignaciones/modal-asignaciones.component';
import { ModalNacimientoComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-nacimiento/modal-nacimiento.component';
import { ModalHorasAusenciaComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-horas-ausencia/modal-horas-ausencia.component';
import { ModalMudanzaComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-mudanza/modal-mudanza.component';
import { ModalAjustesdesistemaComponent } from './components/settings/personalize/Modales/modal-presencia/modal-ajustesdesistema/modal-ajustesdesistema.component';
import { ModalAfegirComponent } from './components/team/modal-afegir/modal-afegir.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/translations/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountMembersComponent,
    AccountMessagesComponent,
    MasterPageComponent,
    AccountPaymentsComponent,
    AccountProfileComponent,
    AccountSettingComponent,
    AccountWorksComponent,
    AuthCoverLoginComponent,
    AuthCoverRePasswordComponent,
    AuthCoverSignupComponent,
    EmailAlertComponent,
    EmailConfirmationComponent,
    EmailInvoiceComponent,
    EmailPasswordResetComponent,
    HelpcenterFaqsComponent,
    HelpcenterGuidesComponent,
    HelpcenterOverviewComponent,
    HelpcenterSupportRequestComponent,
    IndexAppsComponent,
    PageContactDetailComponent,
    PageInvoiceComponent,
    PagePrivacyComponent,
    PageTermsComponent,
    ShopCartComponent,
    ShopCheckoutsComponent,
    ShopMyaccountComponent,
    ShopProductDetailComponent,
    ShopProductsComponent,
    ScrollspyDirective,
    CommonComponent,
    AuthCoverSignupPassComponent,
    SuccesComponent,
    ErrorComponent,
    CorporateComponent,
    PersonalComponent,
    SelfAttendanceComponent,
    CorporateAttendanceComponent,
    CorporateDocumentsComponent,
    MyDocumentsComponent,
    EmployeesComponent,
    TeamStatusComponent,
    TeamRolesComponent,
    FunctionalitiesComponent,
    IntegrationsComponent,
    SubscriptionComponent,
    SettingRolesComponent,
    BusinessComponent,
    PersonalizeComponent,
    RequestsComponent,
    ModalComponent,
    ModalSelfComponent,
    ModalCorporateDocumentComponent,
    AbsencesComponent,
    PresenceComponent,
    ShiftsComponent,
    NotificationsComponent,
    ReportsComponent,
    ModalCalendarioComponent,
    ModalHorarioComponent,
    ModalConvenioComponent,
    ModalTiposComponent,
    ModalReglasComponent,
    ModalSolicitudesComponent,
    ModalAsignacionesComponent,
    ModalPersonalComponent,
    ModalDashboardComponent,
    ModalCentrosComponent,
    ModalSedesComponent,
    ModalHabilidadComponent,
    ModalAtributosComponent,
    ModalDepartamentosComponent,
    ModalCargosComponent,
    ModalRolComponent,
    ModalNacimientoComponent,
    ModalMaternidadComponent,
    ModalHorasAusenciaComponent,
    ModalMudanzaComponent,
    ModalEnfermedadComponent,
    ModalDefuncionComponent,
    ModalBodaComponent,
    ModalPaternidadComponent,
    ModalTreballFestiuComponent,
    ModalTreballFestiuComponent,
    ModalAjustesdesistemaComponent,
    ModalExtraordinariasComponent,
    ModalComplementariasComponent,
    ModalAceptacioVoluntariaComponent,
    ModalFuerzamajorComponent,
    ModalCompensarComponent,
    ModalAfegirComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
    NgxYoutubePlayerModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    SwiperModule,
    NgxTypedJsModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgxMasonryModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    FeatherModule,
    ScrollspyDirective
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },  
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
