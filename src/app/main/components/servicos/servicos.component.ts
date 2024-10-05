import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent implements OnInit{
  ngOnInit() {
    AOS.init();
  }
}
