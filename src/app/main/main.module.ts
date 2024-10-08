import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { SolucoesComponent } from './components/solucoes/solucoes.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ServicosComponent,
    SubscribeComponent,
    SolucoesComponent
  ],
  exports:[HeaderComponent,
    FooterComponent]
})
export class MainModule { }
