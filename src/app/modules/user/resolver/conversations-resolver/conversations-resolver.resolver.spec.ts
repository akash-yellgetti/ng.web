import { TestBed } from '@angular/core/testing';

import { ConversationsResolverResolver } from './conversations-resolver.resolver';

describe('ConversationsResolverResolver', () => {
  let resolver: ConversationsResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ConversationsResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
