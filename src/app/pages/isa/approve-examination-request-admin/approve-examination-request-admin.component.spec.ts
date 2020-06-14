import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveExaminationRequestAdminComponent } from './approve-examination-request-admin.component';

describe('ApproveExaminationRequestAdminComponent', () => {
  let component: ApproveExaminationRequestAdminComponent;
  let fixture: ComponentFixture<ApproveExaminationRequestAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveExaminationRequestAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveExaminationRequestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
