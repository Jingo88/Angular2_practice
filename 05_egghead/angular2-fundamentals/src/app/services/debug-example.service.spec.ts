import { TestBed, inject } from '@angular/core/testing';

import { DebugExampleService } from './debug-example.service';

describe('DebugExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DebugExampleService]
    });
  });

  it('should ...', inject([DebugExampleService], (service: DebugExampleService) => {
    expect(service).toBeTruthy();
  }));
});
