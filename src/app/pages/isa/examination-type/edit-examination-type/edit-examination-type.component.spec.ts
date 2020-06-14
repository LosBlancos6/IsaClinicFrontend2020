import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExaminationTypeComponent } from './edit-examination-type.component';

describe('EditExaminationTypeComponent', () => {
  let component: EditExaminationTypeComponent;
  let fixture: ComponentFixture<EditExaminationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExaminationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExaminationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
