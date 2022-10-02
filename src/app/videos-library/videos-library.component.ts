import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-videos-library',
  templateUrl: './videos-library.component.html',
  styleUrls: ['./videos-library.component.scss']
})
export class VideosLibraryComponent implements OnInit {

  videoList : Video[] = [];

  video0 : Video = new Video(`img0.jpg`, `Une maison trop chou!`, `My best houses`, 501, '04/03/2012');
  video1 : Video = new Video(`img1.jpg`, `Promenade au lac d'Unn`, `The embraced One`, 12056, '27/09/2014');
  video2 : Video = new Video(`img2.jpg`, `Mérité.`, `Beaucoup trop long`, 1000000, '01/12/0001');
  video3 : Video = new Video(`img3.jpg`, `Mythologies à St-Paul des Arts`, `IFN Culture`, 50, '04/03/2008');
  video4 : Video = new Video(`img4.jpg`, `Chris Christodoulou - Coalescence`, `Chris Christodoulou`, 5056, '12/11/2016');
  video5 : Video = new Video(`img5.jpg`, `Danger - 22:41`, `Danger`, 8990, '16/08/2019');
  video6 : Video = new Video(`img6.jpg`, `C\'est comme à la maison!`, `Astronogeek?`, 2041, '11/01/2020');
  video7 : Video = new Video(`img7.jpg`, `Ne posez pas de questions...`, `Vtuber Random Stuff`, 11014, '22/02/2021');

  @Output()
  videoSent : EventEmitter<Video[]> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.videoList.push(this.video0);
    this.videoList.push(this.video1);
    this.videoList.push(this.video2);
    this.videoList.push(this.video3);
    this.videoList.push(this.video4);
    this.videoList.push(this.video5);
    this.videoList.push(this.video6);
    this.videoList.push(this.video7);
    this.sendVideos();    
  }

  sendVideos() : void{
    this.videoSent.emit(this.videoList);
  }

}
