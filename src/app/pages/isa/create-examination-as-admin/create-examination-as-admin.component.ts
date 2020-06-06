import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExaminationTypeService } from 'src/app/services/examination-type.service';
import { MedicalService } from 'src/app/services/medical.service';
import { OperationRoomService } from 'src/app/services/operation-room.service';
import { PatientService } from 'src/app/services/patient.service';
import { ExaminationRequestService } from 'src/app/services/examination-request.service';

@Component({
  selector: 'app-create-examination-as-admin',
  templateUrl: './create-examination-as-admin.component.html',
  styleUrls: ['./create-examination-as-admin.component.css']
})
export class CreateExaminationAsAdminComponent implements OnInit {

  validateForm: FormGroup;
  public listOfExaminationType = [];
  public listOfDoctors = [];
  public listOfOperationRooms = [];
  public listOfPatients = [];

  constructor(private fb: FormBuilder, private examinationTypeService: ExaminationTypeService, private medicalService: MedicalService, private operationRoomService: OperationRoomService, private patientService: PatientService, private examinationRequestService: ExaminationRequestService) { }

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
      operationRoomId: [null, [Validators.required]],
      // patientId: [null, [Validators.required]]
    });
  }

  onClick() {
    const user = JSON.parse(localStorage.getItem("user"));

    const date = this.convert(this.validateForm.value.date);
    const time = this.validateForm.value.time;
    const examinationTypeId = this.validateForm.value.examinationTypeId;
    const doctorId = this.validateForm.value.doctorId;
    const clinicId = user.myClinic.id;
    const operationRoomId = this.validateForm.value.operationRoomId;
    // const patientId = this.validateForm.value.patientId;

    const filterObject = {
      examinationDate: date,
      startAt: time,
      examinationTypeId: examinationTypeId,
      doctorId: doctorId,
      clinicId: clinicId,
      operationRoomId: operationRoomId,
      // patientId: patientId
    }

    console.log(filterObject);
    this.examinationRequestService.createPredefinedExamination(filterObject).subscribe(data => {
      console.log(data);
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

    const user = JSON.parse(localStorage.getItem("user"));
    this.medicalService.getAllMedicalByClinic(user.myClinic.id).subscribe(data => {
      console.log(data);
      this.listOfDoctors = data;
    });
    this.operationRoomService.getOperationRoomsByClinicId(user.myClinic.id).subscribe((data: any) => {
      console.log(data);
      this.listOfOperationRooms = data;
    });
    // this.patientService.getAllPatients().subscribe(data => {
    //   console.log(data);
    //   this.listOfPatients = data;
    // });
    // this.patientService.getAllPatientsByClinic(user.myClinic.id).subscribe(data => {
    //   console.log(data);
    //   this.listOfPatients = data;
    // });
  }



}
