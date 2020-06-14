import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import { IsaComponent } from './pages/isa/isa.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { AdminComponent } from './pages/isa/profile/admin/admin.component';
import { MyProfileComponent } from './pages/isa/profile/my-profile/my-profile.component';
import { AdminListComponent } from './pages/isa/list/admin-list/admin-list.component';
import { ClinicListComponent } from './pages/isa/list/clinic-list/clinic-list.component';
import { MedicalListComponent } from './pages/isa/list/medical-list/medical-list.component';
import { PatientListComponent } from './pages/isa/list/patient-list/patient-list.component';
import { NotFoundComponent } from './pages/auth/not-found/not-found.component';
import { ClinicComponent } from './pages/isa/profile/clinic/clinic.component';
import { MedicalComponent } from './pages/isa/profile/medical/medical.component';
import { PatientComponent } from './pages/isa/profile/patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientHomePageComponent } from './pages/isa/patient-home-page/patient-home-page.component';
import { MedicalListByPatientComponent } from './pages/isa/medical-list-by-patient/medical-list-by-patient.component';
import { CreateDoctorComponent } from './pages/isa/create-doctor/create-doctor.component';
import { FirstPasswordComponent } from './pages/auth/first-password/first-password.component';
import { RegistrationRequestsComponent } from './pages/isa/registration-requests/registration-requests.component';
import { ChangePasswordComponent } from './pages/isa/change-password/change-password.component';
import { ExaminationTypeListComponent } from './pages/isa/examination-type/examination-type-list/examination-type-list.component';
import { EditExaminationTypeComponent } from './pages/isa/examination-type/edit-examination-type/edit-examination-type.component';
import { CreateExaminationTypeComponent } from './pages/isa/examination-type/create-examination-type/create-examination-type.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateExaminationAsAdminComponent } from './pages/isa/examination-request-predefined/create-examination-as-admin/create-examination-as-admin.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material';
import { ExaminationRequestListDoctorComponent } from './pages/isa/examination-request-predefined/examination-request-list-doctor/examination-request-list-doctor.component';
import { ViewExaminationPredefinedComponent } from './pages/isa/examination-request-predefined/view-examination-predefined/view-examination-predefined.component';
import { HealthRecordComponent } from './pages/isa/review/health-record/health-record.component';
import { ReviewDoctorComponent } from './pages/isa/review/review-doctor/review-doctor.component';
import { OperationRoomListComponent } from './pages/isa/operation-room/operation-room-list/operation-room-list.component';
import { EditOperationRoomComponent } from './pages/isa/operation-room/edit-operation-room/edit-operation-room.component';
import { CreateOperationRoomComponent } from './pages/isa/operation-room/create-operation-room/create-operation-room.component';
import { VacationRequestComponent } from './pages/isa/vacation/vacation-request/vacation-request.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { EditClinicProfileComponent } from './pages/isa/edit-clinic-profile/edit-clinic-profile.component';
import { VacationRequestListComponent } from './pages/isa/vacation/vacation-request-list/vacation-request-list.component';
import { AngularYandexMapsModule, IConfig } from 'angular8-yandex-maps';
import { ClinicLocationComponent } from './pages/isa/clinic-location/clinic-location.component';
import { CreateAvailableExaminationComponent } from './pages/isa/examination-request-predefined/create-available-examination/create-available-examination.component';
import { SchedulingExaminationAsPatientComponent } from './pages/isa/examination-request-patient/scheduling-examination-as-patient/scheduling-examination-as-patient.component';
import { FreeDoctorInClinicComponent } from './pages/isa/examination-request-patient/free-doctor-in-clinic/free-doctor-in-clinic.component';
import { AvailableExaminationOfDoctorComponent } from './pages/isa/examination-request-patient/available-examination-of-doctor/available-examination-of-doctor.component';
import { ViewAvailableExaminationComponent } from './pages/isa/examination-request-patient/view-available-examination/view-available-examination.component';
import { ExaminationRequestAdminComponent } from './pages/isa/examination-request-admin/examination-request-admin.component';
import { ApproveExaminationRequestAdminComponent } from './pages/isa/approve-examination-request-admin/approve-examination-request-admin.component';

const mapConfig: IConfig = {
  apiKey: '658f67a2-fd77-42e9-b99e-2bd48c4ccad4',
  lang: 'en_US',
};

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    IsaComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    MyProfileComponent,
    AdminListComponent,
    ClinicListComponent,
    MedicalListComponent,
    PatientListComponent,
    NotFoundComponent,
    ClinicComponent,
    MedicalComponent,
    PatientComponent,
    PatientHomePageComponent,
    MedicalListByPatientComponent,
    CreateDoctorComponent,
    FirstPasswordComponent,
    RegistrationRequestsComponent,
    ChangePasswordComponent,
    ExaminationTypeListComponent,
    EditExaminationTypeComponent,
    CreateExaminationTypeComponent,
    CreateExaminationAsAdminComponent,
    ExaminationRequestListDoctorComponent,
    ViewExaminationPredefinedComponent,
    HealthRecordComponent,
    ReviewDoctorComponent,
    OperationRoomListComponent,
    EditOperationRoomComponent,
    CreateOperationRoomComponent,
    VacationRequestComponent,
    EditClinicProfileComponent,
    VacationRequestListComponent,
    ClinicLocationComponent,
    CreateAvailableExaminationComponent,
    SchedulingExaminationAsPatientComponent,
    FreeDoctorInClinicComponent,
    AvailableExaminationOfDoctorComponent,
    ViewAvailableExaminationComponent,
    ExaminationRequestAdminComponent,
    ApproveExaminationRequestAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    IntlModule,
    DateInputsModule,
    LabelModule,
    InputsModule,
    AngularYandexMapsModule.forRoot(mapConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
