import { TestBed, inject } from '@angular/core/testing';

import { OmdbReqService } from './omdb-req.service';

describe('OmdbReqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmdbReqService]
    });
  });

  it('should ...', inject([OmdbReqService], (service: OmdbReqService) => {
    expect(service).toBeTruthy();
  }));
});
