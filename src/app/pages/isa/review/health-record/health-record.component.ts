import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExaminationRequestService } from 'src/app/services/examination-request.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-health-record',
  templateUrl: './health-record.component.html',
  styleUrls: ['./health-record.component.css']
})
export class HealthRecordComponent implements OnInit {

  public listOfData = [];
  private form: FormGroup;

  constructor(private examinationRequestService: ExaminationRequestService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.setupData();
    this.form = this.setupForm();
  }

  private setupData(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    this.examinationRequestService.getExaminationRequestByPatient(user.id).subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  private setupForm(): FormGroup {
    return this.fb.group({
      examinationTypeName: [''],
      examinationDate: [''],
      price: [''],
    });
  }

  onSearch() {
    console.log(this.form.value);
    this.examinationRequestService.searchExamination(this.form.value).subscribe(data => {
      this.listOfData = data;
    });
  }

  onAssess(id) {
    this.router.navigateByUrl(`dashboard/review-doctor/${id}`);
  }

}
