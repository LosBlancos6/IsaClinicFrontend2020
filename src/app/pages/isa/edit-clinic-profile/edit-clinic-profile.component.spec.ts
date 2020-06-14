import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClinicProfileComponent } from './edit-clinic-profile.component';

describe('EditClinicProfileComponent', () => {
  let component: EditClinicProfileComponent;
  let fixture: ComponentFixture<EditClinicProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClinicProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClinicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
