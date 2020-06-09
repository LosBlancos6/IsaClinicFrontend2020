import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacation-request',
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css']
})
export class VacationRequestComponent implements OnInit {

  public range = { start: null, end: null };

  constructor() { }

  ngOnInit() {
    // console.log(this.range);
    // console.log(this.provera());
  }

  onSchedule() {
    const pocetak = this.convert(this.range.start);
    const kraj = this.convert(this.range.end);

    const Object = {
      start: pocetak,
      end: kraj
    }

    console.log(Object);
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
