import { TestBed } from '@angular/core/testing';

import { Libreria1Service } from './libreria1.service';

describe('Libreria1Service', () => {
  let service: Libreria1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Libreria1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
