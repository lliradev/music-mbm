import { Injectable } from '@angular/core';
import { Song } from '../models/song';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  songs: Song[] = [];
  base_url = environment.URL_API + '/songs';

  constructor(private http: HttpClient) { }

  getSongs() {
    return this.http.get(this.base_url);
  }

  getSong(_id: string) {
    return this.http.get<Song>(this.base_url + `/${_id}`);
  }

  postSong(Song) {
    return this.http.post(this.base_url, Song);
  }

  putSong(song, _id: string) {
    return this.http.put<any>(this.base_url + `/${_id}`, song);
  }

  deleteSong(_id: string) {
    return this.http.delete(this.base_url + `/${_id}`);
  }

}//end class
