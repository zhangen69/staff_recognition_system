import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'projects/ng-app/src/environments/environment';
import { NewsfeedGameComponent } from '../newsfeed-game/newsfeed-game.component';

@Component({
  selector: 'app-newsfeed-dashboard',
  templateUrl: './newsfeed-dashboard.component.html',
  styleUrls: ['./newsfeed-dashboard.component.scss']
})
export class NewsfeedDashboardComponent implements OnInit {
  apiUrl = environment.apiUrl;
  bonusLeaderboard: any;
  hashtags: any;

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit() {
    this.http
      .get(this.apiUrl + '/service/bonus/leaderboard')
      .subscribe(data => (this.bonusLeaderboard = data));
    this.http
      .get(this.apiUrl + '/service/hashtag/trending')
      .subscribe(data => (this.hashtags = data));
  }

  playGame() {
    const dialogRef = this.dialog.open(NewsfeedGameComponent, {
      width: '750px',
      disableClose: true,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
