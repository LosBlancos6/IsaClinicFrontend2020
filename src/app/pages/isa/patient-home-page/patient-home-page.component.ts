import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-patient-home-page',
  templateUrl: './patient-home-page.component.html',
  styleUrls: ['./patient-home-page.component.css']
})
export class PatientHomePageComponent implements OnInit {

  public listOfData = [];
  private form: FormGroup;

  constructor(private clinicService: ClinicService, private router: Router, private fb: FormBuilder, private reviewService: ReviewService) { }

  ngOnInit() {
    this.setupData();
    this.form = this.setupForm();
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

  onView(id) {
    this.router.navigateByUrl(`dashboard/clinic-profile/${id}`)
  }

  onEnter(id) {
    console.log(id);
    this.router.navigateByUrl(`dashboard/medical-list-by-patient/${id}`);
  }

  onRate(id) {
    this.router.navigateByUrl(`dashboard/review-clinic/${id}`)
  }

  viewAverageRating(id) {
    this.reviewService.averageClinicRating(id).subscribe(data => {
      console.log(data);
      if (isNaN(data)) {
        alert('Doctor has not been rated yet!');
      } else {
        alert('Average rate is ' + data);
      }
    });
  }
}
