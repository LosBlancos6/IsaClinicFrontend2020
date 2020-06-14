import { TestBed } from '@angular/core/testing';

import { ExaminationRequestService } from './examination-request.service';

describe('ExaminationRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExaminationRequestService = TestBed.get(ExaminationRequestService);
    expect(service).toBeTruthy();
  });
});
