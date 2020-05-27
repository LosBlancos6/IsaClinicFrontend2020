import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { IsaComponent } from './pages/isa/isa.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { AdminComponent } from './pages/isa/profile/admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ]
  },
  {
    path: 'dashboard', component: IsaComponent, children: [
      { path: 'admin-profile', component: AdminComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
