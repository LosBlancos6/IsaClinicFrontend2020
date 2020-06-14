import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  validateForm: FormGroup;

  private id: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.extractId();
    this.setupForm();
  }

  private extractId(): void {
    this.id = this.route.snapshot.params.id;
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  private setupForm(): void {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required, Validators.minLength(3)]],
      rePassword: [null, [Validators.required, this.confirmationValidator]]
    });
  }

  changePassword(): void {
    this.authService.changePassword(this.id, this.validateForm.value).subscribe(data => {
      console.log(data);
      alert("Password successfully changed!");
      const userRaw = localStorage.getItem('user');
      const user = JSON.parse(userRaw);
      if (user.userType === 'MEDICAL') {
        const clinicId = user.myClinic.id;
        this.router.navigateByUrl(`dashboard/clinic/${clinicId}/patients`)
      } else if (user.userType === 'ADMIN') {
        if (user.adminType === 'CLINIC_ADMIN') {
          const clinicId = user.myClinic.id;
          this.router.navigateByUrl(`dashboard/clinic/${clinicId}/medical`)
        } else {
          this.router.navigateByUrl(`dashboard/registration-requests`)
        }
      }
    })
  }

}
