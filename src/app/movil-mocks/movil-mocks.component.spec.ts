import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilMocksComponent } from './movil-mocks.component';

describe('MovilMocksComponent', () => {
  let component: MovilMocksComponent;
  let fixture: ComponentFixture<MovilMocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovilMocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovilMocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
