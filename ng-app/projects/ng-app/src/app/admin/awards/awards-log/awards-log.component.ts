import { Component, OnInit } from '@angular/core';
import { IStandardColumn } from '../../../shared/standard/standard-form-field.interface';

@Component({
  selector: 'app-awards-log',
  templateUrl: './awards-log.component.html',
  styleUrls: ['./awards-log.component.scss']
})
export class AwardsLogComponent implements OnInit {
  showDefaultBtn = false;
  baseUrl = '/admin/awards/awards-log';
  includes: string[] = ['sender', 'receiver'];
  showActionColumn = false;
  columns: IStandardColumn[] = [
    { name: 'sender.displayName', displayName: 'Sender', default: 'System', filter: false },
    { name: 'receiver.displayName', displayName: 'Receiver', default: 'System', filter: false },
    { name: 'points', type: 'number' },
    { name: 'type' },
    { name: 'source' },
    { name: 'audit.createdDate', type: 'date', displayName: 'Audit', filter: false},
  ];

  constructor() { }

  ngOnInit() {
  }

}
