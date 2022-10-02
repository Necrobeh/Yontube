import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input()
  searchResult : string = '';

  @Input()
  videoList : Video[] = [];

  filteredVideoList : Video[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filterVideoList();
  }

  filterVideoList() : void {
    this.searchResult = this.searchResult.toLowerCase();
    this.filteredVideoList = this.videoList.filter( video => video.title.toLowerCase().includes(this.searchResult));
  }

  // refresh(){
  //   this.filterVideoList();
  //   console.log(this.filteredVideoList);
    
  // }
}
