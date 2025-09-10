import { ChangeDetectionStrategy, Component, input, inject, computed } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Video } from '../video-types';

const URLPREFIX = 'https://www.youtube-nocookie.com/embed/';

@Component({
  selector: 'tp-video-player',
  imports: [],
  templateUrl: './video-player.html',
  styleUrl: './video-player.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayer {
  video = input.required<Video | undefined>();

  private domSanitizer = inject(DomSanitizer);

  readonly videoUrl = computed<SafeUrl | undefined>(() => {
    console.log('Computing videoURL for video', this.video());
    const value = this.video();
    return value
      ? this.domSanitizer.bypassSecurityTrustResourceUrl(URLPREFIX + '/' + value.id)
      : undefined;
  });
}
