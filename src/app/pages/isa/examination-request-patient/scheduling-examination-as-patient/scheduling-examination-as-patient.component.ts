import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MedicalService } from 'src/app/services/medical.service';
import { ExaminationTypeService } from 'src/app/services/examination-type.service';
import { PatientService } from 'src/app/services/patient.service';
import { OperationRoomService } from 'src/app/services/operation-room.service';
import { ExaminationRequestService } from 'src/app/services/examination-request.service';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduling-examination-as-patient',
  templateUrl: './scheduling-examination-as-patient.component.html',
  styleUrls: ['./scheduling-examination-as-patient.component.css']
})
export class SchedulingExaminationAsPatientComponent implements OnInit {

  validateForm: FormGroup;
  public listOfExaminationType = [];
  public listOfClinic = [];
  private isSearched: boolean = false;

  constructor(private fb: FormBuilder, private examinationTypeService: ExaminationTypeService, private clinicService: ClinicService, private router: Router) { }

  ngOnInit() {
    this.setupForm();
    this.setupData();
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      date: [null, [Validators.required]],
      examinationTypeId: [null, [Validators.required]],
    });
  }

  onSearch() {
    const date = this.convert(this.validateForm.value.date);
    const examinationTypeId = this.validateForm.value.examinationTypeId;
    this.isSearched = true;

    this.examinationTypeService.getExamaminationTypeById(examinationTypeId).subscribe(data => {

      const filterObject = {
        examinationDate: date,
        examinationType: data
      }
      console.log(filterObject);
      // localStorage.setItem('examinationDate', token);
      localStorage.setItem('Object', JSON.stringify(filterObject));
      this.clinicService.searchFreeDoctorInClinic(filterObject).subscribe(data => {
        console.log(data);
        this.listOfClinic = data;
      });

    });
  }

  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  private setupData(): void {
    this.examinationTypeService.getAllExaminationType().subscribe(data => {
      this.listOfExaminationType = data;
    });
  }

  onView(id) {
    console.log(id);
    this.router.navigateByUrl(`dashboard/free-doctor-in-clinic/${id}`);
  }


}
