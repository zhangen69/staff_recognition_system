import { ActivatedRoute } from '@angular/router';
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
    { name: 'isAdmin', type: 'boolean', required: true },
    { name: 'displayName', type: 'string', required: true },
    { name: 'email', type: 'string', required: true },
    { name: 'phoneNumber', type: 'string', required: true },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.fields.splice(1, 1);
      }
    });
  }

  
}
