import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExaminationRequestService } from 'src/app/services/examination-request.service';

@Component({
  selector: 'app-examination-request-list-doctor',
  templateUrl: './examination-request-list-doctor.component.html',
  styleUrls: ['./examination-request-list-doctor.component.css']
})
export class ExaminationRequestListDoctorComponent implements OnInit {

  public listOfData = [];
  private doctorId;
  private clinicId;

  constructor(private router: Router, private route: ActivatedRoute, private examinationRequestService: ExaminationRequestService) { }

  ngOnInit() {
    this.extractId();
    this.setupData();
  }

  private setupData(): void {
    this.examinationRequestService.getExaminationRequestByMedical(this.doctorId).subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  private extractId(): void {
    this.doctorId = this.route.snapshot.params.id;
    // this.clinicId = this.route.snapshot.params.clinicId;
  }

  onView(data) {
    localStorage.setItem('test', JSON.stringify(data));
    this.router.navigateByUrl(`dashboard/view-examination-predefined/${this.doctorId}/${data.id}`)
  }

  // backToList() {
  //   this.router.navigateByUrl(`dashboard/medical-list-by-patient/${this.doctorId}`);
  // }

}
