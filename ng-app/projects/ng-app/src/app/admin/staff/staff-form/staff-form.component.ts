import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss']
})
export class StaffFormComponent implements OnInit {
  includes = [];
  fields = [
    { name: 'username', type: 'string', required: true },
    { name: 'password', type: 'password', required: true },
  ];

  constructor() {}

  ngOnInit() {}
}
