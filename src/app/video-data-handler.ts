import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideoDataHandler {
  private http = inject(HttpClient);

  loadVideos() {
    return this.http.get('https://api.angularbootcamp.com/videos');
  }
}
