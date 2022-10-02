import { Component, } from '@angular/core';
import { Video } from './models/video.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YongTube';

  searchResult : string = '';

  videoList : Video[] = [];

  getVideos(event : Video[]) : void {
    this.videoList = event;
  }

  getSearchIn(event : string) : void{
    this.searchResult = event;
  }
}
