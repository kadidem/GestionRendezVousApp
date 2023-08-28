import { TestBed } from '@angular/core/testing';

import { AjouterMedecinService } from './ajouter-medecin.service';

describe('AjouterMedecinService', () => {
  let service: AjouterMedecinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterMedecinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
