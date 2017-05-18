import { TestBed, inject } from '@angular/core/testing';

import { TurtlesService } from './turtles.service';

describe('TurtlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TurtlesService]
    });
  });

  it('should ...', inject([TurtlesService], (service: TurtlesService) => {
    expect(service).toBeTruthy();
  }));
});
