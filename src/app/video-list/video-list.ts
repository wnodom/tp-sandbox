import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { VideoDataHandler } from '../video-data-handler';
import { AsyncPipe } from '@angular/common';
import { Video } from '../video-types';

@Component({
  selector: 'tp-video-list',
  imports: [AsyncPipe],
  templateUrl: './video-list.html',
  styleUrl: './video-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoList {
  readonly currentVideo = output<Video>();

  private readonly vdh = inject(VideoDataHandler);

  protected videos$ = this.vdh.loadVideos();

  uniqueTracker(v: Video) {
    return v.id + ';' + v.author + ';' + v.title;
  }

  updateCurrentVideo(v: Video) {
    this.currentVideo.emit(v);
  }
}
