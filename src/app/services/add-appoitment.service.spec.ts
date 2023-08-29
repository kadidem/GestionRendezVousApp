import { TestBed } from '@angular/core/testing';

import { AddAppoitmentService } from './add-appoitment.service';

describe('AddAppoitmentService', () => {
  let service: AddAppoitmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAppoitmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
