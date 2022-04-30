import { TestBed } from '@angular/core/testing';

import { SetDataServiceService } from './set-data-service.service';

describe('SetDataServiceService', () => {
  let service: SetDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
