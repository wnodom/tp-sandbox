import { TestBed } from '@angular/core/testing';

import { VideoDataHandler } from './video-data-handler';

describe('VideoDataHandler', () => {
  let service: VideoDataHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoDataHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
