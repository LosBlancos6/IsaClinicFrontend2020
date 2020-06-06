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
import { CreateExaminationAsAdminComponent } from './pages/isa/create-examination-as-admin/create-examination-as-admin.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material';

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
    CreateExaminationAsAdminComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
