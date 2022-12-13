import { TestBed } from '@angular/core/testing';

import { FirebaseFunctionCallerService } from './firebase-function-caller.service';

describe('FirebaseFunctionCallerService', () => {
  let service: FirebaseFunctionCallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseFunctionCallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
