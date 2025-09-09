import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { VideoDataHandler } from '../video-data-handler';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'tp-video-list',
  imports: [AsyncPipe],
  templateUrl: './video-list.html',
  styleUrl: './video-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoList {
  private readonly vdh = inject(VideoDataHandler);

  protected videos$ = this.vdh.loadVideos();

  uniqueTracker(v: any) {
    return v.id + ';' + v.author + ';' + v.title;
  }
}
