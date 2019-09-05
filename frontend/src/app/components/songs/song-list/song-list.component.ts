import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  constructor(
    public songService: SongService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    this.songService.getSongs().subscribe(res => {
      this.songService.songs = res as Song[];
    })
  }

  onDelete(_id: string) {
    this.songService.deleteSong(_id).subscribe(res => {
      this.snackBar.open('Song deleted!', 'Success', {
        duration: 4000
      });
      this.getSongs();
    });
  }

}//end class
