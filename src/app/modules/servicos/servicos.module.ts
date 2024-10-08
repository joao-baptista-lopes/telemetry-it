import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from '../../main/components/footer/footer.component';
import { HeaderComponent } from '../../main/components/header/header.component';
import { EspecificosBannerComponent } from './components/especificos-banner/especificos-banner.component';
import { ServicosEspecificoComponent } from './components/servicos-especifico/servicos-especifico.component';
import { ServicosRoutingModule } from './servicos-routing.module';
import { EspecificosBodyComponent } from './components/especificos-body/especificos-body.component';


@NgModule({
  declarations: [
    EspecificosBannerComponent,
    ServicosEspecificoComponent,
    EspecificosBodyComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class ServicosModule { }
