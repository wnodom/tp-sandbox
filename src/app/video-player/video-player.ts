import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Video } from '../video-types';

@Component({
  selector: 'tp-video-player',
  imports: [],
  templateUrl: './video-player.html',
  styleUrl: './video-player.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayer {
  video = input<Video>();
}
