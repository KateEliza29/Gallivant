import { TestBed } from '@angular/core/testing';

import { SearchMapBoxService } from './search-map-box.service';

describe('SearchMapBoxService', () => {
  let service: SearchMapBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchMapBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
