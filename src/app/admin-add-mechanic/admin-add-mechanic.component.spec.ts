import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddMechanicComponent } from './admin-add-mechanic.component';

describe('AdminAddMechanicComponent', () => {
  let component: AdminAddMechanicComponent;
  let fixture: ComponentFixture<AdminAddMechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddMechanicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
