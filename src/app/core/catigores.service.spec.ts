import { TestBed } from '@angular/core/testing';

import { CatigoresService } from './catigores.service';

describe('CatigoresService', () => {
  let service: CatigoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatigoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
