import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongListComponent } from './components/songs/song-list/song-list.component';
import { SongCreateComponent } from './components/songs/song-create/song-create.component';


const routes: Routes = [
  { path: '', component: SongListComponent },
  { path: 'create', component: SongCreateComponent },
  { path: 'edit/:_id', component: SongCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
