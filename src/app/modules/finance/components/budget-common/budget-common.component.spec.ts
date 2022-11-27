import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCommonComponent } from './budget-common.component';

describe('BudgetCommonComponent', () => {
  let component: BudgetCommonComponent;
  let fixture: ComponentFixture<BudgetCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
