import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpatientComponent } from './ajouterpatient.component';

describe('AjouterpatientComponent', () => {
  let component: AjouterpatientComponent;
  let fixture: ComponentFixture<AjouterpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterpatientComponent]
    });
    fixture = TestBed.createComponent(AjouterpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
