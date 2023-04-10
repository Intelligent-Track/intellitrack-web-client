import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerListWarehouseComponent } from './manager-list-warehouse.component';

describe('ManagerListWarehouseComponent', () => {
  let component: ManagerListWarehouseComponent;
  let fixture: ComponentFixture<ManagerListWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerListWarehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerListWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
