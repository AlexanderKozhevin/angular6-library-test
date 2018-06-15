import { TestBed, inject } from '@angular/core/testing';

import { RandomerService } from './randomer.service';

describe('RandomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomerService]
    });
  });

  it('should be created', inject([RandomerService], (service: RandomerService) => {
    expect(service).toBeTruthy();
  }));
});
