import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css']
})
export class ClinicListComponent implements OnInit {

  public listOfData = [];
  private user: any;
  private form: FormGroup;

  constructor(private clinicService: ClinicService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.setupUser();
    this.setupData();
    this.form = this.setupForm();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }


  private setupData(): void {
    this.clinicService.getAllClinics().subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  private setupForm(): FormGroup {
    return this.fb.group({
      name: [''],
      address: [''],
      description: [''],
    });
  }

  onSearch() {
    console.log(this.form.value);
    this.clinicService.searchClinic(this.form.value).subscribe(data => {
      this.listOfData = data;
    });
  }

  // onView(id) {
  //   this.router.navigateByUrl(`dashboard/clinic-profile/${id}`)
  // }

  onView(id) {
    const clinicId = this.user.myClinic.id;
    if (id == clinicId) {
      this.router.navigateByUrl(`dashboard/edit-clinic-profile/${id}`)
    } else {
      this.router.navigateByUrl(`dashboard/clinic-profile/${id}`)
    }
  }

}
