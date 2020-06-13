import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { IsaComponent } from './pages/isa/isa.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { AdminComponent } from './pages/isa/profile/admin/admin.component';
import { MyProfileComponent } from './pages/isa/profile/my-profile/my-profile.component';
import { AdminListComponent } from './pages/isa/list/admin-list/admin-list.component';
import { MedicalListComponent } from './pages/isa/list/medical-list/medical-list.component';
import { PatientListComponent } from './pages/isa/list/patient-list/patient-list.component';
import { ClinicListComponent } from './pages/isa/list/clinic-list/clinic-list.component';
import { NotFoundComponent } from './pages/auth/not-found/not-found.component';
import { MedicalComponent } from './pages/isa/profile/medical/medical.component';
import { PatientComponent } from './pages/isa/profile/patient/patient.component';
import { ClinicComponent } from './pages/isa/profile/clinic/clinic.component';
import { PatientHomePageComponent } from './pages/isa/patient-home-page/patient-home-page.component';
import { MedicalListByPatientComponent } from './pages/isa/medical-list-by-patient/medical-list-by-patient.component';
import { CreateDoctorComponent } from './pages/isa/create-doctor/create-doctor.component';
import { FirstPasswordComponent } from './pages/auth/first-password/first-password.component';
import { RegistrationRequestsComponent } from './pages/isa/registration-requests/registration-requests.component';
import { ChangePasswordComponent } from './pages/isa/change-password/change-password.component';
import { ExaminationTypeListComponent } from './pages/isa/examination-type/examination-type-list/examination-type-list.component';
import { EditExaminationTypeComponent } from './pages/isa/examination-type/edit-examination-type/edit-examination-type.component';
import { CreateExaminationTypeComponent } from './pages/isa/examination-type/create-examination-type/create-examination-type.component';
import { CreateExaminationAsAdminComponent } from './pages/isa/examination-request-predefined/create-examination-as-admin/create-examination-as-admin.component';
import { ExaminationRequestListDoctorComponent } from './pages/isa/examination-request-predefined/examination-request-list-doctor/examination-request-list-doctor.component';
import { ViewExaminationPredefinedComponent } from './pages/isa/examination-request-predefined/view-examination-predefined/view-examination-predefined.component';
import { HealthRecordComponent } from './pages/isa/review/health-record/health-record.component';
import { ReviewDoctorComponent } from './pages/isa/review/review-doctor/review-doctor.component';
import { OperationRoomListComponent } from './pages/isa/operation-room/operation-room-list/operation-room-list.component';
import { EditOperationRoomComponent } from './pages/isa/operation-room/edit-operation-room/edit-operation-room.component';
import { CreateOperationRoomComponent } from './pages/isa/operation-room/create-operation-room/create-operation-room.component';
import { VacationRequestComponent } from './pages/isa/vacation/vacation-request/vacation-request.component';
import { EditClinicProfileComponent } from './pages/isa/edit-clinic-profile/edit-clinic-profile.component';
import { VacationRequestListComponent } from './pages/isa/vacation/vacation-request-list/vacation-request-list.component';
import { ClinicLocationComponent } from './pages/isa/clinic-location/clinic-location.component';
import { CreateAvailableExaminationComponent } from './pages/isa/examination-request-predefined/create-available-examination/create-available-examination.component';
import { SchedulingExaminationAsPatientComponent } from './pages/isa/scheduling-examination-as-patient/scheduling-examination-as-patient.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: 'first-password/:id', component: FirstPasswordComponent }

    ]
  },
  {
    path: 'dashboard', component: IsaComponent, children: [

      //Profiles
      { path: 'admin-profile/:id', component: AdminComponent },
      { path: 'medical-profile/:id', component: MedicalComponent },
      { path: 'patient-profile/:id', component: PatientComponent },
      { path: 'clinic-profile/:id', component: ClinicComponent },
      { path: 'my-profile', component: MyProfileComponent },

      //Lists
      { path: 'admin-list', component: AdminListComponent },
      { path: 'clinic/:id/medical', component: MedicalListComponent },
      { path: 'clinic/:id/patients', component: PatientListComponent },
      { path: 'clinic-list', component: ClinicListComponent },
      { path: 'examination-type-list', component: ExaminationTypeListComponent },
      { path: 'operation-room-list', component: OperationRoomListComponent },

      //Patient
      { path: 'choose-clinic', component: PatientHomePageComponent },
      { path: 'medical-list-by-patient/:id', component: MedicalListByPatientComponent },
      { path: 'health-record', component: HealthRecordComponent },
      { path: 'review-doctor/:id', component: ReviewDoctorComponent },
      { path: 'scheduling-examination-as-patient', component: SchedulingExaminationAsPatientComponent },

      //Admin
      { path: 'create-doctor', component: CreateDoctorComponent },
      { path: 'registration-requests', component: RegistrationRequestsComponent },
      { path: 'change-password/:id', component: ChangePasswordComponent },
      { path: 'edit-clinic-profile/:id', component: EditClinicProfileComponent },
      { path: 'vacation-request-list', component: VacationRequestListComponent },
      { path: 'clinic-location/:id', component: ClinicLocationComponent },

      //Doctor
      { path: 'vacation-request', component: VacationRequestComponent },

      //ExaminationType
      { path: 'edit-examination-type/:id', component: EditExaminationTypeComponent },
      { path: 'create-examination-type', component: CreateExaminationTypeComponent },

      //ExaminationPredefined
      { path: 'create-examination-as-admin', component: CreateExaminationAsAdminComponent },
      { path: 'examination-request-list-doctor/:id', component: ExaminationRequestListDoctorComponent },
      { path: 'view-examination-predefined/:doctorId/:examinationId', component: ViewExaminationPredefinedComponent },
      { path: 'create-available-examination', component: CreateAvailableExaminationComponent },

      //OperationRoom
      { path: 'edit-operation-room/:id', component: EditOperationRoomComponent },
      { path: 'create-operation-room', component: CreateOperationRoomComponent },

    ]
  },
  { path: '**', redirectTo: '/auth/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
