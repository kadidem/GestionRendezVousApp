import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationrendezvousComponent } from './creationrendezvous.component';

describe('CreationrendezvousComponent', () => {
  let component: CreationrendezvousComponent;
  let fixture: ComponentFixture<CreationrendezvousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationrendezvousComponent]
    });
    fixture = TestBed.createComponent(CreationrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
