import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  public listOfData = [];
  private id;

  private form: FormGroup;

  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.extractId();
    this.setupData();
    this.form = this.setupForm();
  }

  private setupData(): void {
    this.patientService.getAllPatientsByClinic(this.id).subscribe(data => {
      console.log(data);
      this.listOfData = data;
    }, error => {
      alert('Patient cannot be found in this clinic!');
    })
  }
  // private setupData(): void {
  //   this.patientService.getAllPatients().subscribe(data => {
  //     console.log(data);
  //     this.listOfData = data;
  //   })
  // }

  private extractId(): void {
    this.id = this.route.snapshot.params.id;
  }

  onView(id) {
    this.router.navigateByUrl(`dashboard/patient-profile/${id}`)
  }

  private setupForm(): FormGroup {
    return this.fb.group({
      firstName: [''],
      lastName: [''],
      ssn: ['']
    });
  }

  onSearch() {
    console.log(this.form.value);
    this.patientService.searchPatients(this.form.value, this.id).subscribe(data => {
      this.listOfData = data;
    }, error => {
      alert('Patient isn\'t in this clinic');
    });
  }
}
