import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isa',
  templateUrl: './isa.component.html',
  styleUrls: ['./isa.component.css']
})
export class IsaComponent implements OnInit {

  opened = true;

  constructor() { }

  ngOnInit() {
  }


  toggleSidebar() {
    this.opened = !this.opened;
  }

}
