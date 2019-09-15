import { Component, OnInit } from '@angular/core';
import { IStandardColumn } from '../../../shared/standard/standard-form-field.interface';

@Component({
  selector: 'app-manual-list',
  templateUrl: './manual-list.component.html',
  styleUrls: ['./manual-list.component.scss']
})
export class ManualListComponent implements OnInit {
  // showDefaultBtn = false;
  addNewItemLink = '/admin/awards/manual/add';
  includes = ['receiver'];
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
