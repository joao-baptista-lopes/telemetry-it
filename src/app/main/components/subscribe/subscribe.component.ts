import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }

}
