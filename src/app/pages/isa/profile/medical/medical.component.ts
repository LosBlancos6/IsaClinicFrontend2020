import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalService } from 'src/app/services/medical.service';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

  validateForm: FormGroup;

  @Input()
  public isReadOnly: boolean = true;

  private id: string;
  private user: any;

  constructor(private route: ActivatedRoute, private medicalService: MedicalService, private fb: FormBuilder, private router: Router) { }

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
      // email: [{ value: null, disabled: true }, [Validators.email, Validators.required]],
      firstName: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      lastName: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      country: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      city: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      address: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      ssn: [{ value: null, disabled: this.isReadOnly }, [Validators.required]],
      email: [{ value: null, disabled: this.isReadOnly }, [Validators.email, Validators.required]],
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
    this.medicalService.getMedicalProfileById(this.id).subscribe(data => {
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

  backToList() {
    const clinicId = this.user.myClinic.id;
    this.router.navigateByUrl(`dashboard/clinic/${clinicId}/medical`);
  }

}
