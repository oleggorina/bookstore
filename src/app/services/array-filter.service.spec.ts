import { TestBed } from '@angular/core/testing';

import { ArrayFilterService } from './array-filter.service';

describe('ArrayFilterService', () => {
  let service: ArrayFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
