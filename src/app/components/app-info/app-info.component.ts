import { Component, OnInit } from '@angular/core';
const HEADER: string = 'FAYRIX TEST APPLICATION';

const APP_INFO = [
  'Grid is created via ag-grid/community',
  'To delete grid row click "delete" button',
  'To update row doubleclick on grid cell',
  'Columns with ID are not editable',
  'To add new row click "add" button and fill all required fields'
]

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss']
})
export class AppInfoComponent implements OnInit {
  header: string;
  appInfo: string[];

  constructor() { }

  ngOnInit(): void {
    this.header = HEADER;
    this.appInfo = APP_INFO;
  }
}
