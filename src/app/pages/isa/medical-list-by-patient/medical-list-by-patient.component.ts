import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicalService } from 'src/app/services/medical.service';

@Component({
  selector: 'app-medical-list-by-patient',
  templateUrl: './medical-list-by-patient.component.html',
  styleUrls: ['./medical-list-by-patient.component.css']
})
export class MedicalListByPatientComponent implements OnInit {

  public listOfData = [];
  private clinicId;
  private form: FormGroup;

  constructor(private medicalService: MedicalService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.extractId();
    this.setupData();
    this.form = this.setupForm();
  }

  private setupData(): void {
    this.medicalService.getAllMedicalByClinic(this.clinicId).subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  private extractId(): void {
    this.clinicId = this.route.snapshot.params.id;
  }

  private setupForm(): FormGroup {
    return this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      // examinationType: ['']
    });
  }

  onSearch() {
    console.log(this.form.value);
  }

  backToList() {
    this.router.navigateByUrl(`dashboard/choose-clinic`);
  }

  onView(doctorId) {
    console.log(doctorId)
    this.router.navigateByUrl(`dashboard/examination-request-list-doctor/${doctorId}`)
  }
}
