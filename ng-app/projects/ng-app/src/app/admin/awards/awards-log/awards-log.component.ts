import { Component, OnInit } from '@angular/core';
import { IStandardColumn } from '../../../shared/standard/standard-form-field.interface';

@Component({
  selector: 'app-awards-log',
  templateUrl: './awards-log.component.html',
  styleUrls: ['./awards-log.component.scss']
})
export class AwardsLogComponent implements OnInit {
  baseUrl = '/admin/awards/awards-log';
  includes = ['sender', 'receiver'];
  columns: IStandardColumn[] = [
    { name: 'sender.displayName' },
    { name: 'receiver.displayName' },
    { name: 'points' },
    { name: 'type' },
    { name: 'source' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
