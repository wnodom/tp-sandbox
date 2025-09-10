import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoList } from './video-list/video-list';
import { VideoPlayer } from './video-player/video-player';
import { Video } from './video-types';
import { VideoDataHandler } from './video-data-handler';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VideoList, VideoPlayer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly vdh = inject(VideoDataHandler);

  protected readonly title = signal('sandbox');

  protected readonly videos = toSignal(this.vdh.loadVideos());

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
