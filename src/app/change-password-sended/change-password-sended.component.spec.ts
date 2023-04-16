import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordSendedComponent } from './change-password-sended.component';

describe('ChangePasswordSendedComponent', () => {
  let component: ChangePasswordSendedComponent;
  let fixture: ComponentFixture<ChangePasswordSendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordSendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordSendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
