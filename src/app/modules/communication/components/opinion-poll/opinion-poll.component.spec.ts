import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionPollComponent } from './opinion-poll.component';

describe('OpinionPollComponent', () => {
  let component: OpinionPollComponent;
  let fixture: ComponentFixture<OpinionPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionPollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
