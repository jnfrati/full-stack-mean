import { TestBed } from '@angular/core/testing';

import { SensorEventService } from './sensor-event.service';

describe('SensorEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SensorEventService = TestBed.get(SensorEventService);
    expect(service).toBeTruthy();
  });
});
