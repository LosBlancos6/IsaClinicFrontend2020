import { Component, OnInit } from '@angular/core';
import { VacationRequestService } from 'src/app/services/vacation-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacation-request-list',
  templateUrl: './vacation-request-list.component.html',
  styleUrls: ['./vacation-request-list.component.css']
})
export class VacationRequestListComponent implements OnInit {

  public listOfData = [];

  constructor(private vacationRequestService: VacationRequestService, private router: Router) { }

  ngOnInit() {
    this.setupData();
  }

  private setupData(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.myClinic.id;
    this.vacationRequestService.getAllVacationRequestsByClinic(id).subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  // onView(id) {
  //   this.router.navigateByUrl(`dashboard/admin-profile/${id}`)
  // }

  approveRequest(id) {
    this.vacationRequestService.approveVacationRequest(id).subscribe(data => {
      console.log(data);
      alert('Approved succed');
      this.ngOnInit();
    })
  }

  declineRequest(id) {
    this.vacationRequestService.declineVacationRequest(id).subscribe(data => {
      console.log(data);
      alert('Denied succed');
      this.ngOnInit();
    })
  }
}
