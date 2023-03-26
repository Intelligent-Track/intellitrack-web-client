import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileOperadorComponent } from './edit-profile-operador.component';

describe('EditProfileOperadorComponent', () => {
  let component: EditProfileOperadorComponent;
  let fixture: ComponentFixture<EditProfileOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileOperadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
