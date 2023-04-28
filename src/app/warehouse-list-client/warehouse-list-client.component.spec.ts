import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseListClientComponent } from './warehouse-list-client.component';

describe('WarehouseListClientComponent', () => {
  let component: WarehouseListClientComponent;
  let fixture: ComponentFixture<WarehouseListClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseListClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
