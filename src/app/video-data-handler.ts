import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './video-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoDataHandler {
  private http = inject(HttpClient);

  private _currentVideoSubject = new BehaviorSubject<Video | undefined>(undefined);

  readonly currentVideo$ = this._currentVideoSubject.asObservable();

  updateCurrentVideo(v: Video) {
    this._currentVideoSubject.next(v);
  }

  loadVideos() {
    return this.http.get<Video[]>('https://api.angularbootcamp.com/videos');
  }
}
