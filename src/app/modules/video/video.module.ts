import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideosBodyComponent } from './components/videos-body/videos-body.component';
import { VideosPageComponent } from './components/videos-page/videos-page.component';
import { HeaderComponent } from '../../main/components/header/header.component';
import { FooterComponent } from '../../main/components/footer/footer.component';


@NgModule({
  declarations: [
    VideosBodyComponent,
    VideosPageComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class VideoModule { }
