import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientQuoteServicesComponent } from './client-quote-services.component';

describe('ClientQuoteServicesComponent', () => {
  let component: ClientQuoteServicesComponent;
  let fixture: ComponentFixture<ClientQuoteServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientQuoteServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientQuoteServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
