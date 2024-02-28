import { TestBed } from '@angular/core/testing';

import { ConversationHistoryResolver } from './conversation-history.resolver';

describe('ConversationHistoryResolver', () => {
  let resolver: ConversationHistoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ConversationHistoryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
