import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-home-page',
  templateUrl: './patient-home-page.component.html',
  styleUrls: ['./patient-home-page.component.css']
})
export class PatientHomePageComponent implements OnInit {

  public listOfData = [];

  constructor(private clinicService: ClinicService, private router: Router) { }

  ngOnInit() {
    this.setupData();
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

}
