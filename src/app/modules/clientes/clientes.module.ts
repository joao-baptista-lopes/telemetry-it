import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesBodyComponent } from './components/clientes-body/clientes-body.component';
import { ClientesIntroComponent } from './components/clientes-intro/clientes-intro.component';
import { ClientesBannerComponent } from './components/clientes-banner/clientes-banner.component';
import { ClientesPageComponent } from './components/clientes-page/clientes-page.component';


@NgModule({
  declarations: [
    ClientesPageComponent,
    ClientesBodyComponent,
    ClientesIntroComponent,
    ClientesBannerComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
