import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  constructor(public songService: SongService) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    this.songService.getSongs().subscribe(res => {
      this.songService.songs = res as Song[];
    })
  }

}//end class
