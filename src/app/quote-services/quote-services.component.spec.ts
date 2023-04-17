import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteServicesComponent } from './quote-services.component';

describe('QuoteServicesComponent', () => {
  let component: QuoteServicesComponent;
  let fixture: ComponentFixture<QuoteServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
