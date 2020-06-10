import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VacationRequestService } from 'src/app/services/vacation-request.service';

@Component({
  selector: 'app-vacation-request',
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css']
})
export class VacationRequestComponent implements OnInit {

  public range = { start: null, end: null };
  private validateForm: FormGroup;

  constructor(private fb: FormBuilder, private vacationRequestService: VacationRequestService) { }

  ngOnInit() {
    // console.log(this.range);
    // console.log(this.provera());
    this.setupForm();
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      description: [null, [Validators.required]]
    });
  }

  onSchedule() {
    const start = this.convert(this.range.start);
    const end = this.convert(this.range.end);
    const description = this.validateForm.value.description;
    const user = JSON.parse(localStorage.getItem('user'));

    const Object = {
      startAt: start,
      endAt: end,
      description: description,
      medicalStaffId: user.id
    }

    // console.log(Object);
    this.vacationRequestService.createVacationRequest(Object).subscribe(data => {
      console.log(data);
      alert('request sent successfully');
      // location.reload();
      this.ngOnInit();
    });
  }

  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  enableButton(range) {
    if (range.start == null && range.end == null) {
      return false;
    }
    else {
      return true;
    }
  };

  provera() {
    return this.enableButton(this.range);
  }


}
