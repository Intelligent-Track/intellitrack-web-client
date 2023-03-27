import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatoEditProfileComponent } from './operato-edit-profile.component';

describe('OperatoEditProfileComponent', () => {
  let component: OperatoEditProfileComponent;
  let fixture: ComponentFixture<OperatoEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatoEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatoEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
