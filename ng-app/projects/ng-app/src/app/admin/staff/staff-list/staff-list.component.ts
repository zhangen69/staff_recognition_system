import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  showDefaultBtn = false;
  columns = [
    { name: 'displayName', format: 'link', link: '/staff/view' },
    { name: 'email' },
    { name: 'phoneNumber' },
  ];
  filterList = [];
  actions = [
    { name: 'New Staff', format: 'link', link: '/admin/staff/new', default: true },
  ];

  constructor() { }

  ngOnInit() {
  }

}
