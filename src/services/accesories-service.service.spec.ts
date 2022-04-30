import { TestBed } from '@angular/core/testing';

import { AccesoriesServiceService } from './accesories-service.service';

describe('AccesoriesServiceService', () => {
  let service: AccesoriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesoriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
