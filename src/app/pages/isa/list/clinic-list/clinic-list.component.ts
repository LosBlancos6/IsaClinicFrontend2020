import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css']
})
export class ClinicListComponent implements OnInit {

  public listOfData = [];
  private user: any;

  constructor(private clinicService: ClinicService, private router: Router) { }

  ngOnInit() {
    this.setupUser();
    this.setupData();
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

  onView(id) {
    this.router.navigateByUrl(`dashboard/clinic-profile/${id}`)
  }

  // onView(id) {
  //   const clinicId = this.user.myClinic.id;
  //   if (id == clinicId) {
  //     console.log('Isti');
  //   } else {
  //     this.router.navigateByUrl(`dashboard/clinic-profile/${id}`)
  //   }
  // }

}
