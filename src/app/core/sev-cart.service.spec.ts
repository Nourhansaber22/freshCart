import { TestBed } from '@angular/core/testing';

import { SevCartService } from './sev-cart.service';

describe('SevCartService', () => {
  let service: SevCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
