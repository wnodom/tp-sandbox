import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { VideoDataHandler } from '../video-data-handler';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'tp-video-list',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './video-list.html',
  styleUrl: './video-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoList {
  private vdh = inject(VideoDataHandler);

  protected videos$ = this.vdh.loadVideos();
}
