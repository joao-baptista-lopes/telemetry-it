import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent implements OnInit{
  cards = [
    { title: 'Card title 1', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { title: 'Card title 2', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { title: 'Card title 3', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { title: 'Card title 4', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' }
  ];
  ngOnInit() {
    AOS.init();
  }
}
