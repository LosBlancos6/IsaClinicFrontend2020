import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public isReadOnly: boolean = true;
  public adminForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.adminForm = this.createForm();
  }

  ngOnInit() {
  }

  private createForm(): FormGroup {
    return this.fb.group({
      firstName: [{ value: null, disabled: false }, [Validators.required]],
      lastName: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      country: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      city: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      address: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      ssn: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      email: [{ value: null, disabled: this.isReadOnly }, [Validators.email, Validators.required]],
      phone: [{ value: null, disabled: this.isReadOnly }, [Validators.required]]
    });
  }

}
