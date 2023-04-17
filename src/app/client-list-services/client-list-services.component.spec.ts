import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListServicesComponent } from './client-list-services.component';

describe('ClientListServicesComponent', () => {
  let component: ClientListServicesComponent;
  let fixture: ComponentFixture<ClientListServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientListServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientListServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
