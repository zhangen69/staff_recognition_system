import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  baseUrl = '/admin/staff';
  addNewItemLink = '/admin/staff/add';
  // showDefaultBtn = false;
  columns = [
    { name: 'displayName' },
    { name: 'email' },
    { name: 'phoneNumber' },
  ];
  // filterList = [];
  actions = [
    { name: 'New Staff', format: 'link', link: '/admin/staff/add', default: true },
  ];

  constructor() { }

  ngOnInit() {
  }

}
