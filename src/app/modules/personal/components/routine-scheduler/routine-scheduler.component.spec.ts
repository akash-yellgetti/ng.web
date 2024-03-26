import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineSchedulerComponent } from './routine-scheduler.component';

describe('RoutineSchedulerComponent', () => {
  let component: RoutineSchedulerComponent;
  let fixture: ComponentFixture<RoutineSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineSchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutineSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
