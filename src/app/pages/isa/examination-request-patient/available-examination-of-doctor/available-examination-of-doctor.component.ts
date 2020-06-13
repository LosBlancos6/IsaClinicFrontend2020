import { Component, OnInit } from '@angular/core';
import { ExaminationRequestService } from 'src/app/services/examination-request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-available-examination-of-doctor',
  templateUrl: './available-examination-of-doctor.component.html',
  styleUrls: ['./available-examination-of-doctor.component.css']
})
export class AvailableExaminationOfDoctorComponent implements OnInit {

  public listOfData = [];

  constructor(private examinationRequestService: ExaminationRequestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setupData();
  }

  private setupData(): void {
    const id = this.route.snapshot.params.id;
    const object = JSON.parse(localStorage.getItem('Object'));
    console.log(object);
    this.examinationRequestService.getAvailableExaminationsOfDoctor(object, id).subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  onView(data) {
    localStorage.setItem('Object1', JSON.stringify(data));
    this.router.navigateByUrl(`dashboard/view-available-examination/${data.id}`);
  }

}
