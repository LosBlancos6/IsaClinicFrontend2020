import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationRoomListComponent } from './operation-room-list.component';

describe('OperationRoomListComponent', () => {
  let component: OperationRoomListComponent;
  let fixture: ComponentFixture<OperationRoomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationRoomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
