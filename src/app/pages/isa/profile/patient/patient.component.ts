import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  @Input()
  public isReadOnly: boolean = true;

  public validateForm: FormGroup;

  private id: string;
  private user: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private patientService: PatientService) {
  }

  ngOnInit() {
    this.setupUser();
    this.setupForm();
    this.extractId();
    this.getDetails();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      firstName: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      lastName: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      country: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      city: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      address: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      ssn: [{ value: null, disabled: true }, [Validators.required]],
      email: [{ value: null, disabled: true }, [Validators.email, Validators.required]],
      phone: [{ value: null, disabled: this.isReadOnly }, [Validators.required]]
    });
  }

  private extractId(): void {

    this.id = this.user.id;

  }

  private getDetails(): void {
    this.patientService.getPatientProfileById(this.id).subscribe(data => {
      console.log(data);
      const formValues = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        country: data.country,
        city: data.city,
        address: data.address,
        phone: data.phone,
        ssn: data.ssn
      }
      this.validateForm.setValue(formValues);
    })
  }

}
