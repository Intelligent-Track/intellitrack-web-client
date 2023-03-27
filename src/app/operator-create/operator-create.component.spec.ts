import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorCreateComponent } from './operator-create.component';

describe('OperatorCreateComponent', () => {
  let component: OperatorCreateComponent;
  let fixture: ComponentFixture<OperatorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
