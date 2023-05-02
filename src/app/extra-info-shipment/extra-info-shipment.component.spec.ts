import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInfoShipmentComponent } from './extra-info-shipment.component';

describe('ExtraInfoShipmentComponent', () => {
  let component: ExtraInfoShipmentComponent;
  let fixture: ComponentFixture<ExtraInfoShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraInfoShipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraInfoShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
