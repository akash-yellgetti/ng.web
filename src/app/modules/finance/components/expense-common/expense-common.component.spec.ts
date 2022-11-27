import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCommonComponent } from './expense-common.component';

describe('ExpenseCommonComponent', () => {
  let component: ExpenseCommonComponent;
  let fixture: ComponentFixture<ExpenseCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
