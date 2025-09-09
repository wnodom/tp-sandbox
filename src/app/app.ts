import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoList } from './video-list/video-list';
import { VideoPlayer } from './video-player/video-player';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VideoList, VideoPlayer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('sandbox');

  protected currentVideo = signal({
    title: 'Silicate Crystal Formation in the Disk of an Erupting Star',
    author: 'NASA Spitzer',
    id: 'pPz5lohthaw',
  });

  updateVideo() {
    this.currentVideo.set({
      title: 'Neutron Star Collision Detected - Where Did It Happen?',
      author: 'VideoFromSpace',
      id: '7Tit-O7HedE',
    });
  }
}
