import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video, VideoSchema } from './video-types';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoDataHandler {
  private http = inject(HttpClient);

  readonly currentVideoSubset = toSignal(this.loadVideos());

  loadOneVideo(id: string) {
    return this.http
      .get<Video>('https://api.angularbootcamp.com/videos/' + id)
      .pipe(tap((data) => VideoSchema.safeParse(data)));
  }

  loadVideos() {
    return this.http.get<Video[]>('https://api.angularbootcamp.com/videos');
  }
}
