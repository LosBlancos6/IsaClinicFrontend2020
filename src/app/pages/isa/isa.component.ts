import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-isa',
  templateUrl: './isa.component.html',
  styleUrls: ['./isa.component.css']
})
export class IsaComponent implements OnInit {

  opened = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  toggleSidebar() {
    this.opened = !this.opened;
  }

  onLogout() {
    this.router.navigateByUrl('auth/login');
    localStorage.removeItem('user');
  }

}
