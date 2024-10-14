import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing.module';
import { AcercaBannerComponent } from './components/acerca-banner/acerca-banner.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { FooterComponent } from '../../main/components/footer/footer.component';
import { HeaderComponent } from '../../main/components/header/header.component';
import { VisaoGeralComponent } from './components/visao-geral/visao-geral.component';
import { InfoAdicionalComponent } from './components/info-adicional/info-adicional.component';
import { TimelineComponent } from './components/timeline/timeline.component';


@NgModule({
  declarations: [
    AcercaBannerComponent,
    AcercaComponent,
    VisaoGeralComponent,
    InfoAdicionalComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    SobreRoutingModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SobreModule { }
