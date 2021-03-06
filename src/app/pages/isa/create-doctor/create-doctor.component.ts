import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicalService } from 'src/app/services/medical.service';
import { ExaminationTypeService } from 'src/app/services/examination-type.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  public validateForm: FormGroup;
  public listOfExaminationType = [];
  private id: string;
  private user: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private medicalService: MedicalService, private router: Router, private examinationTypeService: ExaminationTypeService) {
  }

  ngOnInit() {
    this.setupForm();
    this.setupData();
  }

  private setupData(): void {
    this.examinationTypeService.getAllExaminationType().subscribe(data => {
      console.log(data);
      this.listOfExaminationType = data;
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  private setupForm(): void {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      country: [null, [Validators.required]],
      city: [null, [Validators.required]],
      address: [null, [Validators.required]],
      ssn: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      rePassword: [null, [Validators.required, this.confirmationValidator]],
      phone: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      time1: [null, [Validators.required]],
      time2: [null, [Validators.required]],
      examinationTypeId: [null, [Validators.required]]
    });
  }

  createDoctor(): void {

    const user = JSON.parse(localStorage.getItem('user'));
    const firstName = this.validateForm.value.firstName;
    const lastName = this.validateForm.value.lastName;
    const country = this.validateForm.value.country;
    const city = this.validateForm.value.city;
    const address = this.validateForm.value.address;
    const ssn = this.validateForm.value.ssn;
    const email = this.validateForm.value.email;
    const password = this.validateForm.value.password;
    const rePassword = this.validateForm.value.rePassword;
    const phone = this.validateForm.value.phone;
    const time1 = this.validateForm.value.time1;
    const time2 = this.validateForm.value.time2;
    const examinationTypeId = this.validateForm.value.examinationTypeId;

    const Object = {
      firstName: firstName,
      lastName: lastName,
      country: country,
      city: city,
      address: address,
      ssn: ssn,
      email: email,
      password: password,
      rePassword: rePassword,
      phone: phone,
      medicalType: 'DOCTOR',
      examinationTypeId: examinationTypeId,
      startAt: time1,
      endAt: time2
    }

    this.medicalService.createDoctor(Object, user.myClinic.id).subscribe(data =>
      console.log(data));
    alert('Add Successful!');
    this.ngOnInit();
    this.router.navigateByUrl(`/dashboard/clinic/${user.myClinic.id}/medical`);
  }

  backToListClinics() {
    this.user = JSON.parse(localStorage.getItem('user'));
    const clinicId = this.user.myClinic.id;
    this.router.navigateByUrl(`dashboard/clinic/${clinicId}/medical`);
  }

}
