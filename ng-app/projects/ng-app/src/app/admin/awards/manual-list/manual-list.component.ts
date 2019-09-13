import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-list',
  templateUrl: './manual-list.component.html',
  styleUrls: ['./manual-list.component.scss']
})
export class ManualListComponent implements OnInit {
  // showDefaultBtn = false;
  columns = [
    { name: 'displayName', format: 'link', link: '/staff/view' },
    { name: 'email' },
    { name: 'phoneNumber' },
  ];
  filterList = [];
  actions = [];

  constructor() { }

  ngOnInit() {
  }

}
