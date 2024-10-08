import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ContactosBannerComponent } from './components/contactos-banner/contactos-banner.component';
import { FooterComponent } from '../../main/components/footer/footer.component';
import { HeaderComponent } from '../../main/components/header/header.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactosBodyComponent } from './components/contactos-body/contactos-body.component';


@NgModule({
  declarations: [
    FaqComponent,
    ContactosBodyComponent,
    ContactosComponent,
    ContactosBannerComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class ContactoModule { }
