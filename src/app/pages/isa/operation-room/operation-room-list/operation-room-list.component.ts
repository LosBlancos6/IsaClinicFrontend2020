import { Component, OnInit } from '@angular/core';
import { OperationRoomService } from 'src/app/services/operation-room.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-operation-room-list',
  templateUrl: './operation-room-list.component.html',
  styleUrls: ['./operation-room-list.component.css']
})
export class OperationRoomListComponent implements OnInit {

  public listOfData = [];
  private form: FormGroup;
  private id;

  constructor(private operationRoomService: OperationRoomService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setupData();
    this.form = this.setupForm();
  }

  private setupData(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    this.operationRoomService.getOperationRoomsByClinicId(user.myClinic.id).subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  private setupForm(): FormGroup {
    return this.fb.group({
      name: [''],
      number: [''],
    });
  }

  onSearch() {
    console.log(this.form.value);
    const user = JSON.parse(localStorage.getItem('user'));
    this.operationRoomService.searchOperationRoomsByAdmin(this.form.value, user.myClinic.id).subscribe(data => {
      this.listOfData = data;
    }, error => {
      alert('Doctor isn\'t in this clinic');
    });
  }

  onEdit(id) {
    this.router.navigateByUrl(`dashboard/edit-operation-room/${id}`)
  }

  createOperationRoom() {
    this.router.navigateByUrl('dashboard/create-operation-room');
  }

  onDelete(id) {
    this.operationRoomService.deleteOperationRoom(id).subscribe(data => {
      // console.log(data);
      alert('Delete Successful!');
      this.ngOnInit();
    }, error => {
      alert('This operation room is booked for examination!');
    })
  }

}
