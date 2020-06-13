import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicalService } from 'src/app/services/medical.service';

@Component({
  selector: 'app-free-doctor-in-clinic',
  templateUrl: './free-doctor-in-clinic.component.html',
  styleUrls: ['./free-doctor-in-clinic.component.css']
})
export class FreeDoctorInClinicComponent implements OnInit {

  public listOfData = [];

  constructor(private medicalService: MedicalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setupData();
  }

  private setupData(): void {
    const id = this.route.snapshot.params.id;
    const object = JSON.parse(localStorage.getItem('Object'));
    console.log(object);
    this.medicalService.getDoctorsWithAvailableExaminations(object, id).subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  onView(id) {
    this.router.navigateByUrl(`dashboard/available-examination-of-doctor/${id}`)
  }

  back() {
    this.router.navigateByUrl(`dashboard/scheduling-examination-as-patient`);
  }

}
