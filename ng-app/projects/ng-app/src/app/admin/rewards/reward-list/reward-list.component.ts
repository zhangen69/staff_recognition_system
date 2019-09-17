import { Component, OnInit } from '@angular/core';
import { IStandardColumn } from '../../../shared/standard/standard-form-field.interface';

@Component({
  selector: 'app-reward-list',
  templateUrl: './reward-list.component.html',
  styleUrls: ['./reward-list.component.scss']
})
export class RewardListComponent implements OnInit {
  // showDefaultBtn = false;
  addNewItemLink = '/admin/rewards/add';
  baseUrl = '/admin/rewards';
  includes = ['receiver'];
  columns: IStandardColumn[] = [
    { name: 'expiredDate', type: 'date', dateFormat: 'dd MMMM yyyy' },
    { name: 'prizes', format: 'template', template: item => {
      return item.prizes.map((prize) => `${prize.name}(${prize.quantity})`).join(', ');
    } },
  ];
  filterList = [];
  actions = [];

  constructor() { }

  ngOnInit() {
  }

}
