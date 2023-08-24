import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsrendezvousComponent } from './detailsrendezvous.component';

describe('DetailsrendezvousComponent', () => {
  let component: DetailsrendezvousComponent;
  let fixture: ComponentFixture<DetailsrendezvousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsrendezvousComponent]
    });
    fixture = TestBed.createComponent(DetailsrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
