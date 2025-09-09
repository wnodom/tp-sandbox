import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Video } from './video-types';

@Injectable({
  providedIn: 'root',
})
export class VideoDataHandler {
  private http = inject(HttpClient);

  loadVideos() {
    return this.http.get<Video[]>('https://api.angularbootcamp.com/videos');
  }
}
