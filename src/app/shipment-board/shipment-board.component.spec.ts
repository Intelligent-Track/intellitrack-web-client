import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentBoardComponent } from './shipment-board.component';

describe('CancelShipmentComponent', () => {
  let component: ShipmentBoardComponent;
  let fixture: ComponentFixture<ShipmentBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
