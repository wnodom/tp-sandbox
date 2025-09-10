import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './video-types';
import { BehaviorSubject } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class VideoDataHandler {
  private http = inject(HttpClient);

  private _currentVideoSubject = new BehaviorSubject<Video | undefined>(undefined);

  //  private _currentVideoSubset = new BehaviorSubject<Video[]>([]);

  readonly currentVideo$ = this._currentVideoSubject.asObservable();

  readonly currentVideo = toSignal(this.currentVideo$);

  readonly currentVideoSubset = toSignal(this.loadVideos());

  updateCurrentVideo(v: Video) {
    this._currentVideoSubject.next(v);
  }

  loadVideos() {
    return this.http.get<Video[]>('https://api.angularbootcamp.com/videos');
  }
}
