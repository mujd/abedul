import { Component, OnInit } from '@angular/core';
declare function init_plugins();
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  fecha = new Date().getFullYear();
  constructor() {}

  ngOnInit() {
    init_plugins();
  }
}
