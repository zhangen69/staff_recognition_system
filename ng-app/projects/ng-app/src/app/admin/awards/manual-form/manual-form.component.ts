import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-form',
  templateUrl: './manual-form.component.html',
  styleUrls: ['./manual-form.component.scss']
})
export class ManualFormComponent implements OnInit {
  includes = [];
  fields = [
    { name: 'role', type: 'string', required: true },
    { name: 'receiver', type: 'string', required: true },
    { name: 'message', type: 'textarea', required: true },
    { name: 'bonus', type: 'number', required: true },
  ];

  constructor() { }

  ngOnInit() {
  }

}
