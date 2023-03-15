import { TestBed } from '@angular/core/testing';

import { StrompriserService } from './strompriser.service';

describe('StrompriserService', () => {
  let service: StrompriserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrompriserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
