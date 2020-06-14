import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OperationRoomService } from 'src/app/services/operation-room.service';

@Component({
  selector: 'app-create-operation-room',
  templateUrl: './create-operation-room.component.html',
  styleUrls: ['./create-operation-room.component.css']
})
export class CreateOperationRoomComponent implements OnInit {

  validateForm: FormGroup;

  private id: string;

  constructor(private router: Router, private operationRoomService: OperationRoomService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      number: [null, [Validators.required]]
    });
  }

  createOperationRoom() {
    const user = JSON.parse(localStorage.getItem('user'));

    this.operationRoomService.createOperationRoom(this.validateForm.value, user.myClinic.id).subscribe(data => {
      console.log(data);
      alert('Create succed!');
      this.router.navigateByUrl('dashboard/operation-room-list');
    });
  }

  backToList() {
    this.router.navigateByUrl('/dashboard/operation-room-list');
  }

}
