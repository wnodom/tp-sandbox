import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoList } from './video-list/video-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VideoList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('sandbox');
}
