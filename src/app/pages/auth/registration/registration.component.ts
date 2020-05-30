import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private fb: FormBuilder, private patietnService: PatientService, private router: Router) {
    this.registerForm = this.createForm();
  }

  ngOnInit() {

  }

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
      rePassword: [null, [Validators.required, Validators.minLength(3)]],
      phone: [null, [Validators.required, Validators.minLength(3), Validators.pattern("^[0-9]*$")]],
    });
  }

  onRegister() {
    // console.log(this.registerForm.value);
    this.patietnService.createPatient(this.registerForm.value).subscribe(data => {
      console.log(data);
      alert('Registration Successful!');
      this.router.navigateByUrl('auth/login');
    });
  }


}
