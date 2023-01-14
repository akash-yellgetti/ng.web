import { TestBed } from '@angular/core/testing';

import { ConversationHistoryResolverResolver } from './conversation-history-resolver.resolver';

describe('ConversationHistoryResolverResolver', () => {
  let resolver: ConversationHistoryResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ConversationHistoryResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
