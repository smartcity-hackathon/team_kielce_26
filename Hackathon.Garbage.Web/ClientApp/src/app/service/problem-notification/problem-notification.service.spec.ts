import { TestBed, inject } from '@angular/core/testing';

import { ProblemNotificationService } from './problem-notification.service';

describe('ProblemNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemNotificationService]
    });
  });

  it('should be created', inject([ProblemNotificationService], (service: ProblemNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
