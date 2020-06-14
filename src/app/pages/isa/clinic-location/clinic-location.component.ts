import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClinicService } from 'src/app/services/clinic.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-clinic-location',
  templateUrl: './clinic-location.component.html',
  styleUrls: ['./clinic-location.component.css']
})
export class ClinicLocationComponent implements OnInit {

  private x;
  private y;
  private id;
  private clinicId;

  constructor(private router: Router, private route: ActivatedRoute, private clinicService: ClinicService, private authService: AuthService) { }

  ngOnInit() {
    this.extractId();
    this.setupData();
  }

  private extractId(): void {
    this.id = this.route.snapshot.params.id;
  }


  private setupData(): void {
    this.clinicService.getClinicProfileById(this.id).subscribe(data => {
      console.log(data);
      this.x = data.x;
      this.y = data.y;
      this.clinicId = data.id;
    });
  }

  reloadMap(): void {
    window.location.reload();
  }

  backToClinicProfile(): void {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user.userType === 'ADMIN' && user.myClinic.id === this.clinicId) {
      this.router.navigateByUrl(`dashboard/edit-clinic-profile/${this.id}`);
    } else {
      this.router.navigateByUrl(`dashboard/clinic-profile/${this.id}`);
    }
  }

}
