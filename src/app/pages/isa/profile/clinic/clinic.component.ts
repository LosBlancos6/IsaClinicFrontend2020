import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicService } from 'src/app/services/clinic.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  @Input()
  public isReadOnly: boolean = true;

  public validateForm: FormGroup;

  private id: string;
  private user: any;

  public patientRole = environment.patientRole;
  public medicalRole = environment.medicalStaffRole;
  public adminRole = environment.adminRole;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private clinicService: ClinicService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.setupUser();
    this.setupForm();
    this.extractId();
    this.getDetails();
    // if (this.user.userType == "ADMIN") {
    //   this.isReadOnly = false;
    // }
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      name: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      address: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      description: [{ value: null, disabled: this.isReadOnly }, [Validators.required]]
    });
  }


  private extractId(): void {
    if (this.isReadOnly) {
      this.id = this.route.snapshot.params.id;
    } else {
      this.id = this.user.id;
    }
  }


  private getDetails(): void {
    this.clinicService.getClinicProfileById(this.id).subscribe(data => {
      const formValues = {
        name: data.name,
        address: data.address,
        description: data.description
      }
      this.validateForm.setValue(formValues);
    })
  }

  backToList() {
    this.router.navigateByUrl(`dashboard/choose-clinic`)
  }

  backToListClinics() {
    this.router.navigateByUrl(`dashboard/clinic-list`)
  }

  public checkRole(roles: string[]): boolean {
    return this.authService.showByRole(roles);
  }

  viewOnMap(): void {
    const id = this.route.snapshot.params.id;
    this.router.navigateByUrl(`dashboard/clinic-location/${id}`);
  }

}
