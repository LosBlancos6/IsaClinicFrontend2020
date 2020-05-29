import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      phoneNumber: [null, [Validators.required, Validators.minLength(3), Validators.pattern("^[0-9]*$")]],
    });
  }

  onRegister() {
    console.log(this.registerForm.value);
  }


}
