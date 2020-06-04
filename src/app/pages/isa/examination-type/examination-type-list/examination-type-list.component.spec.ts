import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationTypeListComponent } from './examination-type-list.component';

describe('ExaminationTypeListComponent', () => {
  let component: ExaminationTypeListComponent;
  let fixture: ComponentFixture<ExaminationTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
