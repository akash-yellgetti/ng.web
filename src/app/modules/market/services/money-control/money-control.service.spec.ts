import { TestBed } from '@angular/core/testing';

import { MoneyControlService } from './money-control.service';

describe('MoneyControlService', () => {
  let service: MoneyControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
