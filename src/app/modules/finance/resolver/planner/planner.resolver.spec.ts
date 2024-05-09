import { TestBed } from '@angular/core/testing';

import { PlannerResolver } from './planner.resolver';

describe('PlannerResolver', () => {
  let resolver: PlannerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PlannerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
