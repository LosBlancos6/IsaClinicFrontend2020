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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'not-found', component: NotFoundComponent },

    ]
  },
  {
    path: 'dashboard', component: IsaComponent, children: [
      { path: 'admin-profile', component: AdminComponent },
      { path: 'my-profile', component: MyProfileComponent },

      { path: 'admin-list', component: AdminListComponent },
      { path: 'medical-list', component: MedicalListComponent },
      { path: 'patient-list', component: PatientListComponent },
      { path: 'clinic-list', component: ClinicListComponent },
    ]
  },
  { path: '**', redirectTo: '/auth/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
