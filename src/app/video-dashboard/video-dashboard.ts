import { ChangeDetectionStrategy, Component, inject, computed, effect } from '@angular/core';

import { VideoList } from '../video-list/video-list';
import { VideoPlayer } from '../video-player/video-player';
import { Video } from '../video-types';
import { VideoDataHandler } from '../video-data-handler';

@Component({
  selector: 'tp-video-dashboard',
  imports: [VideoList, VideoPlayer],
  templateUrl: './video-dashboard.html',
  styleUrl: './video-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDashboard {
  protected readonly vdh = inject(VideoDataHandler);

  protected readonly videos = this.vdh.currentVideoSubset;

  protected readonly myVideo = computed(() => {
    console.log('Computing myVideo:', this.vdh.currentVideo());
    return this.vdh.currentVideo();
  });

  private myEffect = effect(() => {
    console.log('WITHIN EFFECT:', this.vdh.currentVideo());
  });

  updateCurrentVideo(v: Video) {
    this.vdh.updateCurrentVideo(v);
  }
}
