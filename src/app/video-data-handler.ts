import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './video-types';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class VideoDataHandler {
  private http = inject(HttpClient);

  readonly currentVideoSubset = toSignal(this.loadVideos());

  loadOneVideo(id: string) {
    return this.http.get<Video>('https://api.angularbootcamp.com/videos/' + id);
  }

  loadVideos() {
    return this.http.get<Video[]>('https://api.angularbootcamp.com/videos');
  }
}
