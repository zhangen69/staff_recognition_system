import { Component, OnInit } from '@angular/core';
import { IStandardFormField } from '../../../shared/standard/standard-form-field.interface';

@Component({
  selector: 'app-reward-form',
  templateUrl: './reward-form.component.html',
  styleUrls: ['./reward-form.component.scss']
})
export class RewardFormComponent implements OnInit {
  authUser: any;
  // callback = true;
  includes = [];
  fields: IStandardFormField[] = [
    { name: 'startFrom', type: 'date', required: true },
    { name: 'expiredDate', type: 'date', required: true },
    { name: 'prizes', type: 'table', fields: [
      { name: 'name', type: 'string' },
      { name: 'quantity', type: 'number' },
    ] },
  ];

  constructor() { }

  ngOnInit() {
  }

}
