import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelShipmentComponent } from './cancel-shipment.component';

describe('CancelShipmentComponent', () => {
  let component: CancelShipmentComponent;
  let fixture: ComponentFixture<CancelShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelShipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
