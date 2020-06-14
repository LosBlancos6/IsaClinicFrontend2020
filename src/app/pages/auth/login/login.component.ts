import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.createForm();
  }

  ngOnInit() {

  }

  private createForm(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  onLogin() {
    // console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(data => {
      console.log(data);
      const token = data.token;
      const user = data.user;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      if (user.userType === 'MEDICAL') {
        if (user.setNewPassword) {
          const id = user.id;
          this.router.navigateByUrl(`auth/first-password/${id}`);
        } else {
          const clinicId = user.myClinic.id;
          this.router.navigateByUrl(`dashboard/clinic/${clinicId}/patients`);
        }

      } else if (user.userType === 'PATIENT') {
        this.router.navigateByUrl('dashboard/choose-clinic');

      } else if (user.userType === 'ADMIN') {
        const adminType = user.adminType;
        if (adminType === 'CLINIC_CENTER_ADMIN') {
          this.router.navigateByUrl('dashboard/registration-requests');
        } else if (adminType === 'CLINIC_ADMIN') {
          if (user.setNewPassword) {
            const id = user.id;
            this.router.navigateByUrl(`auth/first-password/${id}`);
          } else {
            const clinicId = user.myClinic.id;
            this.router.navigateByUrl(`dashboard/clinic/${clinicId}/medical`);
          }
        }
      }
    }, error => {
      // console.log(error.error.message)
      // this.errorMessage = error.error.message;
      alert('Wrong password/email!');
    })
  }


}
