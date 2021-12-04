import { TestBed } from '@angular/core/testing';

import { MagicanService } from './magican.service';

describe('MagicanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicanService = TestBed.get(MagicanService);
    expect(service).toBeTruthy();
  });
});
