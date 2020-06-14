import { TestBed } from '@angular/core/testing';

import { OperationRoomService } from './operation-room.service';

describe('OperationRoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperationRoomService = TestBed.get(OperationRoomService);
    expect(service).toBeTruthy();
  });
});
