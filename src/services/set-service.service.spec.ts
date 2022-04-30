import { TestBed } from '@angular/core/testing';

import { SetServiceService } from './set-service.service';

describe('SetServiceService', () => {
  let service: SetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
