import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOperationRoomComponent } from './create-operation-room.component';

describe('CreateOperationRoomComponent', () => {
  let component: CreateOperationRoomComponent;
  let fixture: ComponentFixture<CreateOperationRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOperationRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOperationRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
