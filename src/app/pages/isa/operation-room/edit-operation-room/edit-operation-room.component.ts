import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { OperationRoomService } from 'src/app/services/operation-room.service';

@Component({
  selector: 'app-edit-operation-room',
  templateUrl: './edit-operation-room.component.html',
  styleUrls: ['./edit-operation-room.component.css']
})
export class EditOperationRoomComponent implements OnInit {

  private id: string;
  validateForm: FormGroup;
  public listOfData = null;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private operationRoomService: OperationRoomService) { }

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
      number: [{ value: null, disabled: false }, [Validators.required]]
    });
  }

  private setupData(): void {
    this.operationRoomService.getOperationRoomById(this.id).subscribe(data => {
      console.log(data);
      const formValues = {
        name: data.name,
        number: data.number
      }
      this.validateForm.setValue(formValues);
    })
  }

  editRoom() {
    this.operationRoomService.updateOperationRoom(this.validateForm.value, this.id).subscribe(data => {
      alert('Edit succed!');
      this.router.navigateByUrl('/dashboard/operation-room-list');
    })
  }

  backToList() {
    this.router.navigateByUrl('dashboard/operation-room-list');
  }
} 
