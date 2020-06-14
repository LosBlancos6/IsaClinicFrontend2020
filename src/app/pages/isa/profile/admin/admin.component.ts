import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  validateForm: FormGroup;

  @Input()
  public isReadOnly: boolean = true;

  private id: string;
  private user: any;

  constructor(private route: ActivatedRoute, private adminService: AdminService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.setupUser();
    this.setupForm();
    this.extractId();
    this.getDetails();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      firstName: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      lastName: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      country: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      city: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      address: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      ssn: [{ value: null, disabled: true }, [Validators.required]],
      email: [{ value: null, disabled: true }, [Validators.email, Validators.required]],
      phone: [{ value: null, disabled: this.isReadOnly }, [Validators.required]]
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
    this.adminService.getAdminProfileById(this.id).subscribe(data => {
      console.log(data);
      const formValues = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        country: data.country,
        city: data.city,
        address: data.address,
        phone: data.phone,
        ssn: data.ssn
      }
      this.validateForm.setValue(formValues);
    })
  }

  backToListClinics() {
    if (!this.isReadOnly) {
      const clinicId = this.user.myClinic.id;
      this.router.navigateByUrl(`dashboard/clinic/${clinicId}/medical`);
    } else {
      this.router.navigateByUrl(`dashboard/admin-list`);
    }
  }

  updateAdmin(): void {
    this.adminService.updateAdmin(this.id, this.validateForm.value).subscribe(data => {
      console.log(data);
      alert('Update Successful!');
      this.ngOnInit();
    })
  }

}
