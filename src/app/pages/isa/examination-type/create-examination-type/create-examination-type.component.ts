import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExaminationTypeService } from 'src/app/services/examination-type.service';

@Component({
  selector: 'app-create-examination-type',
  templateUrl: './create-examination-type.component.html',
  styleUrls: ['./create-examination-type.component.css']
})
export class CreateExaminationTypeComponent implements OnInit {

  validateForm: FormGroup;

  private id: string;

  constructor(private router: Router, private examinationTypeService: ExaminationTypeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  createExaminationType() {
    this.examinationTypeService.createExaminationType(this.validateForm.value).subscribe(data => {
      console.log(data);
      alert('Create succed!');
      this.router.navigateByUrl('dashboard/examination-type-list');
    });
  }

  backToList() {
    this.router.navigateByUrl('/dashboard/examination-type-list');
  }

}
