export class Song {
  constructor(_id = '', title = '', artist = '', album = '',
    release_date = null, genre = '') {
    this._id = _id;
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.release_date = release_date;
    this.genre = genre;
  }

  _id: string;
  title: string;
  artist: string;
  album: string;
  release_date: Date;
  genre: string;
}
