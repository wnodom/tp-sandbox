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
}
