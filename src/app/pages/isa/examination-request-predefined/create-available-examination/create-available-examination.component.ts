import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExaminationTypeService } from 'src/app/services/examination-type.service';
import { MedicalService } from 'src/app/services/medical.service';
import { OperationRoomService } from 'src/app/services/operation-room.service';
import { PatientService } from 'src/app/services/patient.service';
import { ExaminationRequestService } from 'src/app/services/examination-request.service';

@Component({
  selector: 'app-create-available-examination',
  templateUrl: './create-available-examination.component.html',
  styleUrls: ['./create-available-examination.component.css']
})
export class CreateAvailableExaminationComponent implements OnInit {


  validateForm: FormGroup;
  public listOfExaminationType = [];
  public listOfDoctors = [];
  public listOfPatients = [];
  private isSearched: boolean = false;

  constructor(private fb: FormBuilder, private examinationTypeService: ExaminationTypeService, private medicalService: MedicalService, private patientService: PatientService, private examinationRequestService: ExaminationRequestService) { }

  ngOnInit() {
    this.setupForm();
    this.setupData();
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      date: [null, [Validators.required]],
      time: [null, [Validators.required]],
      examinationTypeId: [null, [Validators.required]],
      doctorId: [null, [Validators.required]],
    });
  }

  onClick() {
    const user = JSON.parse(localStorage.getItem("user"));

    const date = this.convert(this.validateForm.value.date);
    const time = this.validateForm.value.time;
    const examinationTypeId = this.validateForm.value.examinationTypeId;
    const doctorId = this.validateForm.value.doctorId;
    const clinicId = user.myClinic.id;

    const filterObject = {
      examinationDate: date,
      startAt: time,
      examinationTypeId: examinationTypeId,
      doctorId: doctorId,
      clinicId: clinicId,
    }

    console.log(filterObject);
    this.examinationRequestService.createAvailableExamination(filterObject).subscribe(data => {
      console.log(data);
      alert('Create Successful!');
      this.ngOnInit();
    }, error => {
      alert('Doctor doesn\'t work at that hours');
      this.ngOnInit();
    })
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

  onEditClick(item: any) {
    console.log('examinationTypeid', item);
    this.isSearched = true;
    const user = JSON.parse(localStorage.getItem("user"));

    this.medicalService.medicalListByExaminationType(item, user.myClinic.id).subscribe(data => {
      console.log(data);
      this.listOfDoctors = data;
    });
  }

}
