import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-isa',
  templateUrl: './isa.component.html',
  styleUrls: ['./isa.component.css']
})
export class IsaComponent implements OnInit {

  opened = true;
  private user: any;

  public patientRole = environment.patientRole;
  public medicalRole = environment.medicalStaffRole;
  public adminRole = environment.adminRole;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.setupUser();
  }


  toggleSidebar() {
    this.opened = !this.opened;
  }

  onLogout() {
    this.router.navigateByUrl('auth/login');
    localStorage.removeItem('user');
    localStorage.removeItem('test');
  }

  public checkRole(roles: string[]): boolean {
    return this.authService.showByRole(roles);
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }


}
