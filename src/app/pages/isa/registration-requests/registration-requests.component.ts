import { Component, OnInit } from '@angular/core';
import { RegistrationRequestsService } from 'src/app/services/registration-requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css']
})
export class RegistrationRequestsComponent implements OnInit {

  public listOfData = [];

  constructor(private registrationRequestsService: RegistrationRequestsService, private router: Router) { }

  ngOnInit() {
    this.setupData();
  }

  private setupData(): void {
    this.registrationRequestsService.getAllRegistrationRequests().subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  approveRequest(id) {
    this.registrationRequestsService.approveRegistrations(id).subscribe(data => {
      console.log(data);
      alert('Approved succed');
      this.ngOnInit();
    })
  }

  declineRequest(id) {
    this.registrationRequestsService.deniedRegistrations(id).subscribe(data => {
      console.log(data);
      alert('Denied succed');
      this.ngOnInit();
    })
  }

}
