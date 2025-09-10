import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Video } from '../video-types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tp-video-list',
  templateUrl: './video-list.html',
  styleUrl: './video-list.scss',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoList {
  videos = input<Video[]>();
  readonly selectVideo = output<Video>();

  uniqueTracker(v: Video) {
    return v.id + ';' + v.author + ';' + v.title;
  }

  updateSelectedVideo(v: Video) {
    this.selectVideo.emit(v);
  }
}
