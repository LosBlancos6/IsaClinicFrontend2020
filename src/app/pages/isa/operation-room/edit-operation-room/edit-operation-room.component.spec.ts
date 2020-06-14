import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOperationRoomComponent } from './edit-operation-room.component';

describe('EditOperationRoomComponent', () => {
  let component: EditOperationRoomComponent;
  let fixture: ComponentFixture<EditOperationRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOperationRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOperationRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
