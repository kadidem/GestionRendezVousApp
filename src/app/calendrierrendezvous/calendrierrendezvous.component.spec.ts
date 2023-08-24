import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierrendezvousComponent } from './calendrierrendezvous.component';

describe('CalendrierrendezvousComponent', () => {
  let component: CalendrierrendezvousComponent;
  let fixture: ComponentFixture<CalendrierrendezvousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendrierrendezvousComponent]
    });
    fixture = TestBed.createComponent(CalendrierrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
