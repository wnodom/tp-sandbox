import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { VideoDataHandler } from '../video-data-handler';
import { Video } from '../video-types';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'tp-video-list',
  templateUrl: './video-list.html',
  styleUrl: './video-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoList {
  readonly currentVideo = output<Video>();

  private readonly vdh = inject(VideoDataHandler);

  protected readonly videos = toSignal(this.vdh.loadVideos());

  uniqueTracker(v: Video) {
    return v.id + ';' + v.author + ';' + v.title;
  }

  updateCurrentVideo(v: Video) {
    this.currentVideo.emit(v);
  }
}
