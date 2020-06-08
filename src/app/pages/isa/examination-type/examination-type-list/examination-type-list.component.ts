import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExaminationTypeService } from 'src/app/services/examination-type.service';

@Component({
  selector: 'app-examination-type-list',
  templateUrl: './examination-type-list.component.html',
  styleUrls: ['./examination-type-list.component.css']
})
export class ExaminationTypeListComponent implements OnInit {

  public listOfData = [];
  private form: FormGroup;

  constructor(private examinationTypeService: ExaminationTypeService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setupData();
  }


  private setupData(): void {
    this.examinationTypeService.getAllExaminationType().subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  onEdit(id) {
    this.router.navigateByUrl(`dashboard/edit-examination-type/${id}`)
  }

  createExaminationType() {
    this.router.navigateByUrl('dashboard/create-examination-type');
  }


  onDelete(id) {
    this.examinationTypeService.deleteExaminationType(id).subscribe(data => {
      // console.log(data);
      alert('Delete Successful!');
      this.ngOnInit();
    })
  }
}
