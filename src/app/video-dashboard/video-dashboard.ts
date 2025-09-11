import { ChangeDetectionStrategy, Component, inject, effect, input, signal } from '@angular/core';

import { VideoList } from '../video-list/video-list';
import { VideoPlayer } from '../video-player/video-player';
import { Video } from '../video-types';
import { VideoDataHandler } from '../video-data-handler';
import { take } from 'rxjs';

@Component({
  selector: 'tp-video-dashboard',
  imports: [VideoList, VideoPlayer],
  templateUrl: './video-dashboard.html',
  styleUrl: './video-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VideoDashboard {
  readonly id = input<string | undefined>();

  protected readonly vdh = inject(VideoDataHandler);

  protected readonly videos = this.vdh.currentVideoSubset;

  protected readonly currentVideo = signal<Video | undefined>(undefined);

  private readonly updateCurrentVideo = effect(() => {
    console.log('ID is now', this.id());

    const id = this.id();

    if (!id) return;

    this.vdh
      .loadOneVideo(id)
      .pipe(take(1))
      .subscribe((data) => this.currentVideo.set(data));
  });
}
