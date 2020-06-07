import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExaminationAsAdminComponent } from './create-examination-as-admin.component';

describe('CreateExaminationAsAdminComponent', () => {
  let component: CreateExaminationAsAdminComponent;
  let fixture: ComponentFixture<CreateExaminationAsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExaminationAsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExaminationAsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
