import { environment } from 'projects/ng-app/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IStandardColumn } from '../../../shared/standard/standard-form-field.interface';

@Component({
  selector: 'app-reward-log',
  templateUrl: './reward-log.component.html',
  styleUrls: ['./reward-log.component.scss']
})
export class RewardLogComponent implements OnInit {
  apiUrl = environment.apiUrl;
  domainName = 'rewardTransaction';
  showDefaultBtn = false;
  baseUrl = '/admin/awards/awards-log';
  includes: string[] = ['winner', 'reward'];
  columns: IStandardColumn[] = [
    { name: 'winner.displayName', displayName: 'Winner' },
    { name: 'redeemed', displayName: 'Has Redeemed?', format: 'template', template: item => item.redeemed ? 'Redeemed' : 'Haven\'t' },
    { name: 'redeemedDate', type: 'date' },
    { name: 'rewardName', displayName: 'Reward' },
    { name: 'audit.createdDate', type: 'date', displayName: 'Audit'},
  ];
  actions = [
    { name: 'Redeem Reward', format: 'function', function: item => {
      this.redeemReward(item);
    } }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  redeemReward(item) {
    item.redeemed = true;
    item.redeemedDate = Date.now();
    this.http.post(this.apiUrl + '/service/rewardTransaction', item).subscribe(() => {
      window.location.reload();
    });
  }

}
