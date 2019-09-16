import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'projects/ng-app/src/environments/environment';

@Component({
  selector: 'app-newsfeed-dashboard',
  templateUrl: './newsfeed-dashboard.component.html',
  styleUrls: ['./newsfeed-dashboard.component.scss']
})
export class NewsfeedDashboardComponent implements OnInit {
  apiUrl = environment.apiUrl;
  bonusLeaderboard: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get(this.apiUrl + '/service/bonus/leaderboard')
      .subscribe(data => (this.bonusLeaderboard = data));
  }

}
