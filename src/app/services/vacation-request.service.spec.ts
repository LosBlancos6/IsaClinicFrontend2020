import { TestBed } from '@angular/core/testing';

import { VacationRequestService } from './vacation-request.service';

describe('VacationRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VacationRequestService = TestBed.get(VacationRequestService);
    expect(service).toBeTruthy();
  });
});
