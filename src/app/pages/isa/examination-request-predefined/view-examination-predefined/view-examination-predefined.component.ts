import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExaminationRequestService } from 'src/app/services/examination-request.service';

@Component({
  selector: 'app-view-examination-predefined',
  templateUrl: './view-examination-predefined.component.html',
  styleUrls: ['./view-examination-predefined.component.css']
})
export class ViewExaminationPredefinedComponent implements OnInit {

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
      // clinicName: [{ value: null, disabled: true }],
      patientName: [{ value: null, disabled: true }],
      // doctorName: [{ value: null, disabled: true }],
      // examinationTypeId: [{ value: null, disabled: true }],
      // examinationTypePrice: [{ value: null, disabled: true }],
      examinationTypeName: [{ value: null, disabled: true }]
    });
  }

  private setupData(): void {
    const data = JSON.parse(localStorage.getItem("test"));
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    const formValues = {
      // examinationTypeId: data.examination.name,
      examinationDate: data.examinationDate,
      startAt: data.startAt,
      // clinicName: data.clinic.name,
      patientName: user.firstName,
      // doctorName: data.doctor.firstName,
      // examinationTypePrice: data.examination.price,
      examinationTypeName: data.examinationTypeName
    }
    this.validateForm.setValue(formValues);
    // localStorage.removeItem("test");
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
    const data = JSON.parse(localStorage.getItem("test"));
    // const Object = {
    //   patientId: user.id,
    //   examinationRequestId: data.id,
    // }
    console.log(Object);
    this.examinationRequestService.bookingExamination(user.id, data.id).subscribe(data => {
      alert('Booking Successful!');
      this.router.navigateByUrl(`dashboard/choose-clinic`);
    });
  }

  cancel() {
    const doctorId = this.route.snapshot.params.doctorId;
    this.router.navigateByUrl(`dashboard/examination-request-list-doctor/${doctorId}`);
  }
}
