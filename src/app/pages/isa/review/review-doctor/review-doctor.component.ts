import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review-doctor',
  templateUrl: './review-doctor.component.html',
  styleUrls: ['./review-doctor.component.css']
})
export class ReviewDoctorComponent implements OnInit {

  validateForm: FormGroup;

  private id: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private reviewService: ReviewService, private router: Router) { }

  ngOnInit(): void {
    this.extractId();
    this.setupForm();
  }

  private extractId(): void {
    this.id = this.route.snapshot.params.id;
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      assessment: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(1), Validators.pattern("^[1-5]*$")]],
      description: [null, [Validators.required]]
    });
  }

  rate() {
    const user = JSON.parse(localStorage.getItem('user'));

    const Object = {
      review: this.validateForm.value.assessment,
      description: this.validateForm.value.description,
      patientId: user.id,
      medicalStaffId: this.id
    }
    console.log(Object);

    this.reviewService.reviewDoctor(Object).subscribe(data => {
      console.log(data);
      alert('assessment successful');
      this.router.navigateByUrl('dashboard/choose-clinic');
    }, error => {
      alert('Doctor is already rated!');
    });
  }

  back() {
    this.router.navigateByUrl('dashboard/health-record');
  }
}
