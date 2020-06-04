import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExaminationTypeService } from 'src/app/services/examination-type.service';

@Component({
  selector: 'app-edit-examination-type',
  templateUrl: './edit-examination-type.component.html',
  styleUrls: ['./edit-examination-type.component.css']
})
export class EditExaminationTypeComponent implements OnInit {

  private id: string;
  validateForm: FormGroup;
  selectedValue = null;
  public listOfData = null;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private examinationTypeService: ExaminationTypeService) { }

  ngOnInit() {
    this.extractId();
    this.setupForm();
    this.setupData();
  }

  private extractId(): void {
    this.id = this.route.snapshot.params.id;
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      name: [{ value: null, disabled: false }, [Validators.required]],
      price: [{ value: null, disabled: false }, [Validators.required]]
    });
  }

  private setupData(): void {
    this.examinationTypeService.getExamaminationTypeById(this.id).subscribe(data => {
      console.log(data);
      const formValues = {
        name: data.name,
        price: data.price
      }
      this.validateForm.setValue(formValues);
    })
  }

  editExaminationType() {
    this.examinationTypeService.updateExaminationType(this.id, this.validateForm.value).subscribe(data => {
      alert('Edit succed!');
      this.router.navigateByUrl('/dashboard/examination-type-list');
    })
  }

  backToList() {
    this.router.navigateByUrl('/dashboard/examination-type-list');
  }

}
