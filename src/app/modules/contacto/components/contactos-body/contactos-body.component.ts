import { Component, OnInit } from '@angular/core';import * as AOS from 'aos';


@Component({
  selector: 'app-contactos-body',
  templateUrl: './contactos-body.component.html',
  styleUrl: './contactos-body.component.scss'
})
export class ContactosBodyComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
