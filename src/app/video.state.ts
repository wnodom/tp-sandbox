import { inject } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, map, of, pipe, switchMap, tap } from 'rxjs';

import { Video } from './video-types';
import { VideoDataHandler } from './video-data-handler';

export interface VideoState {
  currentVideos: Video[];
}

const placeDataInVideoStateObject = (videos: Video[]) => {
  return {
    currentVideos: videos,
  };
};

export const VideoStore = signalStore(
  { providedIn: 'root', protectedState: false },
  withState<VideoState>({ currentVideos: [] }),
  withMethods((state) => {
    // const { currentVideos } = state;
    const loader = inject(VideoDataHandler);

    return {
      load: rxMethod<void>(
        pipe(
          switchMap(() => {
            return loader.loadVideos().pipe(
              map(placeDataInVideoStateObject),
              catchError((error) => {
                console.error('Could not load videos', error);
                window.alert('Could not load videos');
                return of({ currentVideos: [] });
              }),
              tap((videos: VideoState) => patchState(state, videos)),
            );
          }),
        ),
      ),
    };
  }),
  withHooks({
    onInit({ load }) {
      load();
    },
  }),
);
