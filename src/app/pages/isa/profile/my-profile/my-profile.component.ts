import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public type: string;

  constructor() { }

  ngOnInit() {
    this.setType();
  }

  private setType(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    this.type = user.userType;
  }

}
