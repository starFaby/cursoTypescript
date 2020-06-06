import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
// tslint:disable-next-line: no-input-rename
  @Input('propiedadhijo') datohijo: any;
  constructor() { }

  ngOnInit() {
  }

}
