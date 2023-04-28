import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseInfoAdminComponent } from './warehouse-info-admin.component';

describe('WarehouseInfoAdminComponent', () => {
  let component: WarehouseInfoAdminComponent;
  let fixture: ComponentFixture<WarehouseInfoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseInfoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseInfoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
