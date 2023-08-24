import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermedecinComponent } from './ajoutermedecin.component';

describe('AjoutermedecinComponent', () => {
  let component: AjoutermedecinComponent;
  let fixture: ComponentFixture<AjoutermedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutermedecinComponent]
    });
    fixture = TestBed.createComponent(AjoutermedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
