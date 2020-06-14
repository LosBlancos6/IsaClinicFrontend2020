import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ExaminationTypeService } from 'src/app/services/examination-type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClinicService } from 'src/app/services/clinic.service';
import { OperationRoomService } from 'src/app/services/operation-room.service';
import { ExaminationRequestService } from 'src/app/services/examination-request.service';

@Component({
  selector: 'app-approve-examination-request-admin',
  templateUrl: './approve-examination-request-admin.component.html',
  styleUrls: ['./approve-examination-request-admin.component.css']
})
export class ApproveExaminationRequestAdminComponent implements OnInit {

  validateForm: FormGroup;
  public listOfFreeRooms = [];
  private isSearched: boolean = false;

  constructor(private fb: FormBuilder, private examinationTypeService: ExaminationTypeService, private clinicService: ClinicService, private router: Router, private operationRoomService: OperationRoomService, private route: ActivatedRoute, private examinationRequestService: ExaminationRequestService) { }

  ngOnInit() {
    this.setupForm();
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      number: [null, [Validators.required]],
    });
  }

  onSearch() {
    console.log(this.validateForm.value);
    this.isSearched = true;
    const user = JSON.parse(localStorage.getItem('user'));
    const examinationId = this.route.snapshot.params.id;
    this.operationRoomService.searchOperationRoom(this.validateForm.value, user.myClinic.id, examinationId).subscribe(data => {
      console.log(data);
      this.listOfFreeRooms = data;
    })
    // const date = this.convert(this.validateForm.value.date);
    // const examinationTypeId = this.validateForm.value.examinationTypeId;
    // this.isSearched = true;

    // this.examinationTypeService.getExamaminationTypeById(examinationTypeId).subscribe(data => {

    //   const filterObject = {
    //     examinationDate: date,
    //     examinationType: data
    //   }
    //   console.log(filterObject);
    //   // localStorage.setItem('examinationDate', token);
    //   localStorage.setItem('Object', JSON.stringify(filterObject));
    //   this.clinicService.searchFreeDoctorInClinic(filterObject).subscribe(data => {
    //     console.log(data);
    //     this.listOfClinic = data;
    //   });

    // });
  }

  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  // onView(id) {
  //   console.log(id);
  //   this.router.navigateByUrl(`dashboard/free-doctor-in-clinic/${id}`);
  // }


  addRoom(id) {
    const examinationId = this.route.snapshot.params.id;
    this.examinationRequestService.approveExaminationRequest(examinationId, id).subscribe(data => {
      console.log(data);
      alert('Add Succesfuly!')
    });
  }

}
