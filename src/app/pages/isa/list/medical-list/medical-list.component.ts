import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MedicalService } from 'src/app/services/medical.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-list',
  templateUrl: './medical-list.component.html',
  styleUrls: ['./medical-list.component.css']
})
export class MedicalListComponent implements OnInit {

  public listOfData = [];
  private id;
  private form: FormGroup;

  constructor(private medicalService: MedicalService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.extractId();
    this.setupData();
    this.form = this.setupForm();
  }


  private setupData(): void {
    this.medicalService.getAllMedicalByClinic(this.id).subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  private extractId(): void {
    this.id = this.route.snapshot.params.id;
  }

  onView(id) {
    this.router.navigateByUrl(`dashboard/medical-profile/${id}`)
  }

  createDoctor() {
    this.router.navigateByUrl('/dashboard/create-doctor')
  }

  onDelete(id) {
    this.medicalService.deleteDoctor(id).subscribe(data => {
      // console.log(data);
      alert('Delete Successful!');
      this.ngOnInit();
    })
  }

  private setupForm(): FormGroup {
    return this.fb.group({
      firstName: [''],
      lastName: [''],
      examinationType: ['']
    });
  }

  onSearch() {
    console.log(this.form.value);
    this.medicalService.searchMedicalStaff(this.form.value).subscribe(data => {
      this.listOfData = data;
    });
  }

}
