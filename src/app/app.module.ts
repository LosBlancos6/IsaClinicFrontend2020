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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
