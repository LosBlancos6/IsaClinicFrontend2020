import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-first-password',
  templateUrl: './first-password.component.html',
  styleUrls: ['./first-password.component.css']
})
export class FirstPasswordComponent implements OnInit {

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

  submitForm(): void {
    this.authService.setFirstPassword(this.id, this.validateForm.value).subscribe(data => {
      const userRaw = localStorage.getItem('user');
      const user = JSON.parse(userRaw);
      alert('Changed Successful');
      if (user.userType === 'MEDICAL') {
        const clinicId = user.myClinic.id;
        this.router.navigateByUrl(`dashboard/clinic/${clinicId}/patients`)
      } else {
        const clinicId = user.myClinic.id;
        this.router.navigateByUrl(`dashboard/clinic/${clinicId}/medical`);
      }
    })
  }



}
