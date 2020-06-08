import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExaminationRequestService } from 'src/app/services/examination-request.service';

@Component({
  selector: 'app-health-record',
  templateUrl: './health-record.component.html',
  styleUrls: ['./health-record.component.css']
})
export class HealthRecordComponent implements OnInit {

  public listOfData = [];

  constructor(private examinationRequestService: ExaminationRequestService, private router: Router) { }

  ngOnInit() {
    this.setupData();
  }

  private setupData(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    this.examinationRequestService.getExaminationRequestByPatient(user.id).subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  onAssess(id) {
    this.router.navigateByUrl(`dashboard/review-doctor/${id}`);
  }

}
