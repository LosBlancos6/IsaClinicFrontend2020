import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExaminationRequestService } from 'src/app/services/examination-request.service';

@Component({
  selector: 'app-view-available-examination',
  templateUrl: './view-available-examination.component.html',
  styleUrls: ['./view-available-examination.component.css']
})
export class ViewAvailableExaminationComponent implements OnInit {

  private id: string;
  validateForm: FormGroup;
  public listOfData = null;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private examinationRequestService: ExaminationRequestService) { }

  ngOnInit() {
    this.setupForm();
    this.setupData();
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      examinationDate: [{ value: null, disabled: true }],
      startAt: [{ value: null, disabled: true }],
      endAt: [{ value: null, disabled: true }],
      examinationTypePrice: [{ value: null, disabled: true }],
      examinationTypeName: [{ value: null, disabled: true }]
    });
  }

  private setupData(): void {
    const data = JSON.parse(localStorage.getItem("test"));
    const user = JSON.parse(localStorage.getItem("user"));
    const object1 = JSON.parse(localStorage.getItem("Object1"));


    const formValues = {
      examinationDate: object1.examinationDate,
      startAt: object1.startAt,
      endAt: object1.endAt,
      examinationTypePrice: object1.price,
      examinationTypeName: object1.examinationTypeName
    }
    this.validateForm.setValue(formValues);
  }

  // createRequest(): void {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   const data = JSON.parse(localStorage.getItem("test"));
  //   console.log(data);
  //   const body = {
  //     examinationDate: moment(data.examinationDate).format('YYYY/MM/DD'),
  //     startAt: data.startAt,
  //     examinationTypeId: data.examination.id,
  //     patientId: user.id,
  //     clinicId: data.clinic.id,
  //     doctorId: data.doctor.id,
  //   }
  //   console.log(body);
  //   this.examinationService.createRequest(body).subscribe(() => {

  //   })
  // }

  // cancelRequest(): void {
  //   localStorage.removeItem("test");
  //   this.router.navigateByUrl(`dashboard/scheduling-examination`)
  // }


  bookingExamination() {
    const user = JSON.parse(localStorage.getItem('user'));
    const examinationRequestId = this.route.snapshot.params.id;

    this.examinationRequestService.bookingExamination(user.id, examinationRequestId).subscribe(data => {
      alert('Booking Successful!');
      this.router.navigateByUrl(`dashboard/choose-clinic`);
    });
  }

  // cancel() {
  //   const doctorId = this.route.snapshot.params.doctorId;
  //   this.router.navigateByUrl(`dashboard/examination-request-list-doctor/${doctorId}`);
  // }

}
