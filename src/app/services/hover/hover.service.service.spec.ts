import { TestBed } from '@angular/core/testing';

import { HoverServiceService } from './hover.service.service';

describe('HoverServiceService', () => {
  let service: HoverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
