import { TestBed } from '@angular/core/testing';

import { NumbertowordsserviceService } from './numbertowordsservice.service';

describe('NumbertowordsserviceService', () => {
  let service: NumbertowordsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumbertowordsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
