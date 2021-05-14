import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCoverLoginComponent } from './auth/auth-cover-login/auth-cover-login.component';
import { AuthCoverRePasswordComponent } from './auth/auth-cover-re-password/auth-cover-re-password.component';
import { AuthCoverSignupPassComponent } from './auth/auth-cover-signup-pass/auth-cover-signup-pass.component';
import { AuthCoverSignupComponent } from './auth/auth-cover-signup/auth-cover-signup.component';
import { CorporateAttendanceComponent } from './components/attendance/corporate-attendance/corporate-attendance.component';
import { SelfAttendanceComponent } from './components/attendance/self-attendance/self-attendance.component';
import { AbsencesComponent } from './components/calendar/absences/absences.component';
import { PresenceComponent } from './components/calendar/presence/presence.component';
import { ShiftsComponent } from './components/calendar/shifts/shifts.component';
import { CorporateComponent } from './components/dashboard/corporate/corporate.component';
import { PersonalComponent } from './components/dashboard/personal/personal.component';
import { CorporateDocumentsComponent } from './components/documents/corporate-documents/corporate-documents.component';
import { EmployeesComponent } from './components/documents/employees/employees.component';
import { MyDocumentsComponent } from './components/documents/my-documents/my-documents.component';
import { RequestsComponent } from './components/requests/requests.component';
import { BusinessComponent } from './components/settings/business/business.component';
import { ModalAtributosComponent } from './components/settings/business/Modales/modal-atributos/modal-atributos.component';
import { ModalCargosComponent } from './components/settings/business/Modales/modal-cargos/modal-cargos.component';
import { ModalCentrosComponent } from './components/settings/business/Modales/modal-centros/modal-centros.component';
import { ModalDepartamentosComponent } from './components/settings/business/Modales/modal-departamentos/modal-departamentos.component';
import { ModalHabilidadComponent } from './components/settings/business/Modales/modal-habilidad/modal-habilidad.component';
import { ModalSedesComponent } from './components/settings/business/Modales/modal-sedes/modal-sedes.component';
import { IntegrationsComponent } from './components/settings/integrations/integrations.component';
import { NotificationsComponent } from './components/settings/notifications/notifications.component';
import { ModalAsignacionesComponent } from './components/settings/personalize/Modales/modal-asignaciones/modal-asignaciones.component';
import { ModalCalendarioComponent } from './components/settings/personalize/Modales/modal-calendario/modal-calendario.component';
import { ModalConvenioComponent } from './components/settings/personalize/Modales/modal-convenio/modal-convenio.component';
import { ModalHorarioComponent } from './components/settings/personalize/Modales/modal-horario/modal-horario.component';
import { ModalAceptacioVoluntariaComponent } from './components/settings/personalize/Modales/modal-presencia/modal-aceptacio-voluntaria/modal-aceptacio-voluntaria.component';
import { ModalAjustesdesistemaComponent } from './components/settings/personalize/Modales/modal-presencia/modal-ajustesdesistema/modal-ajustesdesistema.component';
import { ModalCompensarComponent } from './components/settings/personalize/Modales/modal-presencia/modal-compensar/modal-compensar.component';
import { ModalComplementariasComponent } from './components/settings/personalize/Modales/modal-presencia/modal-complementarias/modal-complementarias.component';
import { ModalExtraordinariasComponent } from './components/settings/personalize/Modales/modal-presencia/modal-extraordinarias/modal-extraordinarias.component';
import { ModalFuerzamajorComponent } from './components/settings/personalize/Modales/modal-presencia/modal-fuerzamajor/modal-fuerzamajor.component';
import { ModalTreballFestiuComponent } from './components/settings/personalize/Modales/modal-presencia/modal-treball-festiu/modal-treball-festiu.component';
import { ModalReglasComponent } from './components/settings/personalize/Modales/modal-reglas/modal-reglas.component';
import { ModalSolicitudesComponent } from './components/settings/personalize/Modales/modal-solicitudes/modal-solicitudes.component';
import { ModalTiposComponent } from './components/settings/personalize/Modales/modal-tipos/modal-tipos.component';
import { ModalBodaComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-boda/modal-boda.component';
import { ModalDefuncionComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-defuncion/modal-defuncion.component';
import { ModalEnfermedadComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-enfermedad/modal-enfermedad.component';
import { ModalHorasAusenciaComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-horas-ausencia/modal-horas-ausencia.component';
import { ModalMaternidadComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-maternidad/modal-maternidad.component';
import { ModalMudanzaComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-mudanza/modal-mudanza.component';
import { ModalNacimientoComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-nacimiento/modal-nacimiento.component';
import { ModalVacacionesComponent } from './components/settings/personalize/Modales/modales-ausencia/modal-vacaciones/modal-vacaciones.component';
import { PersonalizeComponent } from './components/settings/personalize/personalize.component';
import { ModalRolComponent } from './components/settings/setting-roles/modal-rol/modal-rol.component';
import { SettingRolesComponent } from './components/settings/setting-roles/setting-roles.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SubscriptionComponent } from './components/settings/subscription/subscription.component';
import { TeamRolesComponent } from './components/team/team-roles/team-roles.component';
import { TeamStatusComponent } from './components/team/team-status/team-status.component';
import { AccountMembersComponent } from './core/components/account-members/account-members.component';
import { AccountMessagesComponent } from './core/components/account-messages/account-messages.component';
import { AccountPaymentsComponent } from './core/components/account-payments/account-payments.component';
import { AccountProfileComponent } from './core/components/account-profile/account-profile.component';
import { AccountSettingComponent } from './core/components/account-setting/account-setting.component';
import { AccountWorksComponent } from './core/components/account-works/account-works.component';
import { HelpcenterFaqsComponent } from './core/components/helpcenter-faqs/helpcenter-faqs.component';
import { HelpcenterGuidesComponent } from './core/components/helpcenter-guides/helpcenter-guides.component';
import { HelpcenterOverviewComponent } from './core/components/helpcenter-overview/helpcenter-overview.component';
import { HelpcenterSupportRequestComponent } from './core/components/helpcenter-support-request/helpcenter-support-request.component';
import { IndexAppsComponent } from './core/components/index-apps/index-apps.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { PageContactDetailComponent } from './core/components/page-contact-detail/page-contact-detail.component';
import { PageInvoiceComponent } from './core/components/page-invoice/page-invoice.component';
import { PagePrivacyComponent } from './core/components/page-privacy/page-privacy.component';
import { PageTermsComponent } from './core/components/page-terms/page-terms.component';
import { ShopCartComponent } from './core/components/shop-cart/shop-cart.component';
import { ShopCheckoutsComponent } from './core/components/shop-checkouts/shop-checkouts.component';
import { ShopMyaccountComponent } from './core/components/shop-myaccount/shop-myaccount.component';
import { ShopProductDetailComponent } from './core/components/shop-product-detail/shop-product-detail.component';
import { ShopProductsComponent } from './core/components/shop-products/shop-products.component';
import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';
import { FunctionalitiesComponent } from './functionalities/functionalities.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', component: IndexAppsComponent },
      { path: 'account-messages', component: AccountMessagesComponent },
      { path: 'account-members', component: AccountMembersComponent },
      { path: 'account-payments', component: AccountPaymentsComponent },
      { path: 'account-profile', component: AccountProfileComponent },
      { path: 'account-setting', component: AccountSettingComponent },
      { path: 'account-works', component: AccountWorksComponent },
      { path: 'helpcenter-faqs', component: HelpcenterFaqsComponent },
      { path: 'helpcenter-guides', component: HelpcenterGuidesComponent },
      { path: 'helpcenter-overview', component: HelpcenterOverviewComponent },
      { path: 'helpcenter-support-request', component: HelpcenterSupportRequestComponent },
      { path: 'index-apps', component: IndexAppsComponent },
      { path: 'page-contact-detail', component: PageContactDetailComponent },
      { path: 'page-invoice', component: PageInvoiceComponent },
      { path: 'page-privacy', component: PagePrivacyComponent },
      { path: 'page-terms', component: PageTermsComponent },
      { path: 'shop-cart', component: ShopCartComponent },
      { path: 'shop-checkouts', component: ShopCheckoutsComponent },
      { path: 'shop-myaccount', component: ShopMyaccountComponent },
      { path: 'shop-product-detail', component: ShopProductDetailComponent },
      { path: 'shop-products', component: ShopProductsComponent },
    ]
  },


  { path: 'home', component: FunctionalitiesComponent,
  children: [
    { path: 'corporate', component: CorporateComponent },
    { path: 'personal', component: PersonalComponent },
    { path: 'self-attendance', component: SelfAttendanceComponent },
    { path: 'corporate-attendance', component: CorporateAttendanceComponent },
    { path: 'corporate-documents', component: CorporateDocumentsComponent },
    { path: 'my-documents', component: MyDocumentsComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'team-status', component: TeamStatusComponent },
    { path: 'team-roles', component: TeamRolesComponent },
    { path: 'setting-roles', component: SettingRolesComponent },
    { path: 'requests', component: RequestsComponent },
    { path: 'absences', component: AbsencesComponent },
    { path: 'presence', component: PresenceComponent },
    { path: 'shifts', component: ShiftsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'settings-personalize', component: PersonalizeComponent },
    { path: 'settings-subscripcion', component: SubscriptionComponent },
    { path: 'settings-notifications', component: NotificationsComponent },
    { path: 'integrations', component: IntegrationsComponent },
    { path: 'settings-business', component: BusinessComponent }, 
    { path: 'personalize', component: PersonalizeComponent },
    { path: 'modal-asignacion', component: ModalAsignacionesComponent },  
    { path: 'modal-calendario', component: ModalCalendarioComponent },
    { path: 'modal-horario', component: ModalHorarioComponent },
    { path: 'modal-convenio', component: ModalConvenioComponent },
    { path: 'modal-tipos', component: ModalTiposComponent },
    { path: 'modal-reglas', component: ModalReglasComponent },
    { path: 'modal-solicitud', component: ModalSolicitudesComponent },
    { path: 'bqusiness', component: BusinessComponent },
    { path: 'modal-centrobs', component: ModalCentrosComponent },
    { path: 'modal-sedes', component: ModalSedesComponent },
    { path: 'modal-habilidad', component: ModalHabilidadComponent },
    { path: 'modal-atributos', component: ModalAtributosComponent },
    { path: 'modal-departamentos', component: ModalDepartamentosComponent },
    { path: 'modal-cargos', component: ModalCargosComponent },
    { path: 'modal-rol', component: ModalRolComponent },
    { path: 'modal-vacaciones', component: ModalVacacionesComponent },
    { path: 'modal-nacimiento', component: ModalNacimientoComponent },
    { path: 'modal-matePrnidad', component: ModalMaternidadComponent },
    { path: 'modal-horas-ausencia', component: ModalHorasAusenciaComponent },
    { path: 'modal-mudanza', component: ModalMudanzaComponent },
    { path: 'modal-enfermedad', component: ModalEnfermedadComponent },
    { path: 'modal-defuncion', component: ModalDefuncionComponent },
    { path: 'modal-boda', component: ModalBodaComponent },
    { path: 'modal-paternidad', component: ModalMaternidadComponent },
    { path: 'modal-treball-festiu', component: ModalTreballFestiuComponent },
    { path: 'modal-treball-cagsa', component: ModalTreballFestiuComponent },
    { path: 'modal-ajustes-sistema', component: ModalAjustesdesistemaComponent },
    { path: 'modal-extraordinaria', component: ModalExtraordinariasComponent },
    { path: 'modal-complementarias', component: ModalComplementariasComponent },
    { path: 'modal-aceptacion-voluntaria', component: ModalAceptacioVoluntariaComponent },
    { path: 'modal-fueriza-major', component: ModalFuerzamajorComponent },
    { path: 'modal-compensar', component: ModalCompensarComponent },  
    { path: 'settings-roles', component: SettingRolesComponent },
  ] },
  { path: 'requests', component: RequestsComponent },

  { path: 'auth-cover-login', component: AuthCoverLoginComponent },
  { path: 'auth-cover-re-password', component: AuthCoverRePasswordComponent },
  { path: 'auth-cover-signup', component: AuthCoverSignupComponent },
  { path: 'set-password/:id', component:  AuthCoverSignupPassComponent },


  { path: 'email-alert', component: EmailAlertComponent },
  { path: 'email-confirmation', component: EmailConfirmationComponent },
  { path: 'email-invoice', component: EmailInvoiceComponent },
  { path: 'email-password-reset', component: EmailPasswordResetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
