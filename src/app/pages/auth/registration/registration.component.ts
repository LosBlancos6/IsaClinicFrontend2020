import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.createForm();
  }

  ngOnInit() {

  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  private createForm(): FormGroup {
    return this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      country: [null, [Validators.required, Validators.minLength(3)]],
      city: [null, [Validators.required, Validators.minLength(3)]],
      address: [null, [Validators.required, Validators.minLength(3)]],
      ssn: [null, [Validators.required, Validators.minLength(3), Validators.pattern("^[0-9]*$")]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3)]],
      rePassword: [null, [Validators.required, this.confirmationValidator]],
      phone: [null, [Validators.required, Validators.minLength(3), Validators.pattern("^[0-9]*$")]],
    });
  }

  onRegister() {
    // console.log(this.registerForm.value);
    this.authService.registration(this.registerForm.value).subscribe(data => {
      console.log(data);
      alert('Registration Successful!');
      this.router.navigateByUrl('auth/login');
    });
  }


}
