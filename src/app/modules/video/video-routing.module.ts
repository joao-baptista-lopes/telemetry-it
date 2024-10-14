import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosPageComponent } from './components/videos-page/videos-page.component';

const routes: Routes = [
  {
    path: '',
    component: VideosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
