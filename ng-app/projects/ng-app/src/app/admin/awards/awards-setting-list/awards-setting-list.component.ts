import { Component, OnInit } from '@angular/core';
import { IStandardColumn } from '../../../shared/standard/standard-form-field.interface';

@Component({
  selector: 'app-awards-setting-list',
  templateUrl: './awards-setting-list.component.html',
  styleUrls: ['./awards-setting-list.component.scss']
})
export class AwardsSettingListComponent implements OnInit {
  // showDefaultBtn = false;
  addNewItemLink = '/admin/awards/setting/add';
  baseUrl = '/admin/awards/setting';
  includes = [];
  columns: IStandardColumn[] = [
    { name: 'role' },
    { name: 'receiver.displayName', displayName: 'Receiver' },
    { name: 'bonus' },
    { name: 'message' },
  ];
  filterList = [];
  actions = [];

  constructor() { }

  ngOnInit() {
  }

}
