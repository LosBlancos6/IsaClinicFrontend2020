import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { ExaminationRequestService } from 'src/app/services/examination-request.service';

@Component({
  selector: 'app-examination-request-admin',
  templateUrl: './examination-request-admin.component.html',
  styleUrls: ['./examination-request-admin.component.css']
})
export class ExaminationRequestAdminComponent implements OnInit {

  public listOfData = [];

  constructor(private examinationRequestService: ExaminationRequestService, private router: Router) { }

  ngOnInit() {
    this.setupData();
  }

  private setupData(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    this.examinationRequestService.getAllExaminationRequestByClinic(user.myClinic.id).subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  // onView(id) {
  //   this.router.navigateByUrl(`dashboard/admin-profile/${id}`)
  // }
}
