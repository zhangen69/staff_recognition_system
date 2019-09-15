import { Component, OnInit } from '@angular/core';
import { IStandardFormField } from '../../../shared/standard/standard-form-field.interface';

@Component({
  selector: 'app-manual-form',
  templateUrl: './manual-form.component.html',
  styleUrls: ['./manual-form.component.scss']
})
export class ManualFormComponent implements OnInit {
  includes = ['receiver'];
  fields: IStandardFormField[] = [
    { name: 'role', type: 'string', displayName: 'Role/Award Name', required: true },
    { name: 'bonus', type: 'number', required: true },
    { name: 'receiver', type: 'ref', ref: 'user', refName: 'displayName', required: true },
    { name: 'message', type: 'textarea', required: true },
  ];

  constructor() { }

  ngOnInit() {
  }

}
