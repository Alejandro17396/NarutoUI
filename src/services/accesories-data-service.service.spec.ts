import { TestBed } from '@angular/core/testing';

import { AccesoriesDataServiceService } from './accesories-data-service.service';

describe('AccesoriesDataServiceService', () => {
  let service: AccesoriesDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesoriesDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
