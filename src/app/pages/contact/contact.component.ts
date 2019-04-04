import { Component, OnInit } from '@angular/core';
declare function init_contact_validation();
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    init_contact_validation();
  }
}
