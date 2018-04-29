import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('service should have add method',inject([TestService], (service: TestService) => {
    expect(service.addTwoNum).toBeTruthy();
  }))

  it('service should add two num',inject([TestService], (service: TestService) => {
    expect(service.addTwoNum(1,2)).toEqual(3);
  }))
});
