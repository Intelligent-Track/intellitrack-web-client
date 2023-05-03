import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverBoardComponent } from './driver-board.component';

describe('DriverBoardComponent', () => {
  let component: DriverBoardComponent;
  let fixture: ComponentFixture<DriverBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
