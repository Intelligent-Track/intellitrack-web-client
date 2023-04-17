import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListCRUDComponent } from './vehicle-list-crud.component';

describe('VehicleListCRUDComponent', () => {
  let component: VehicleListCRUDComponent;
  let fixture: ComponentFixture<VehicleListCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleListCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleListCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
