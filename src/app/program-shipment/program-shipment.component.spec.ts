import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramShipmentComponent } from './program-shipment.component';

describe('ProgramShipmentComponent', () => {
  let component: ProgramShipmentComponent;
  let fixture: ComponentFixture<ProgramShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramShipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
