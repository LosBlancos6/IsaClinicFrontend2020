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
      const user = data.user;
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl(`dashboard/patient-profile`);
    }, error => {
      console.log(error.error.message)
      this.errorMessage = error.error.message;
    })
  }


}
