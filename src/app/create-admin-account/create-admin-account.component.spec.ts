import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminAccountComponent } from './create-admin-account.component.js';

describe('CreateAdminAccountComponent', () => {
  let component: CreateAdminAccountComponent;
  let fixture: ComponentFixture<CreateAdminAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAdminAccountComponent]
    });
    fixture = TestBed.createComponent(CreateAdminAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
