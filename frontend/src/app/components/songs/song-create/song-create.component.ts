import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {
  thumbnail: string = '';
  isLoading = false;
  form: FormGroup;

  constructor(
    public songService: SongService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const _id = this.route.snapshot.paramMap.get('_id');
    if (_id) {
      this.songService.getSong(_id).subscribe(res => {
        this.form.patchValue({
          title: res.title,
          artist: res.artist,
          album: res.album,
          release_date: res.release_date,
          genre: res.genre,
          _id: res._id
        });
        this.thumbnail = res.imagePath;
      });
    } else {
      console.log('Create');
    }
    this.initForm();
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('image').setValue(file);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.thumbnail = event.target.result;
      }
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    const fd = new FormData();
    fd.append('title', this.form.get('title').value);
    fd.append('artist', this.form.get('artist').value);
    fd.append('album', this.form.get('album').value);
    fd.append('release_date', this.form.get('release_date').value);
    fd.append('genre', this.form.get('genre').value);
    fd.append('image', this.form.get('image').value);
    const _id = this.form.get('_id').value;
    if (_id) {
      this.songService.putSong(fd, _id).subscribe(res => {
        this.form.reset();
        this.router.navigate(['/songs']);
      });
    } else {
      this.songService.postSong(fd).subscribe(res => {
        this.form.reset();
        this.router.navigate(['/songs']);
      });
    }
  }

  private initForm() {
    this.form = this.fb.group({
      _id: [''],
      title: ['', Validators.required],
      artist: ['', Validators.required],
      album: ['', Validators.required],
      release_date: [null],
      genre: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

}//end class
