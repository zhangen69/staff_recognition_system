import { Component, OnInit } from '@angular/core';
import { IStandardColumn } from '../../../shared/standard/standard-form-field.interface';

@Component({
  selector: 'app-reward-log',
  templateUrl: './reward-log.component.html',
  styleUrls: ['./reward-log.component.scss']
})
export class RewardLogComponent implements OnInit {
  domainName = 'rewardTransaction';
  showDefaultBtn = false;
  baseUrl = '/admin/awards/awards-log';
  includes: string[] = ['sender', 'receiver'];
  columns: IStandardColumn[] = [
    { name: 'sender.displayName', displayName: 'Sender', default: 'System' },
    { name: 'receiver.displayName', displayName: 'Receiver' },
    { name: 'points' },
    { name: 'type' },
    { name: 'source' },
    { name: 'audit.createdDate', type: 'date', displayName: 'Audit'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
