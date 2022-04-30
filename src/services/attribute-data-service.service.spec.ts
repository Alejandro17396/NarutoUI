import { TestBed } from '@angular/core/testing';

import { AttributeDataServiceService } from './attribute-data-service.service';

describe('AttributeDataServiceService', () => {
  let service: AttributeDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributeDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
