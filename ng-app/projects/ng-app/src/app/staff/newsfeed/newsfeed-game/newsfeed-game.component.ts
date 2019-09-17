import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { from, interval, timer } from 'rxjs';
import { tap, timeout, takeUntil, finalize } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-newsfeed-game',
  templateUrl: './newsfeed-game.component.html',
  styleUrls: ['./newsfeed-game.component.scss']
})
export class NewsfeedGameComponent implements OnInit {
  apiUrl = environment.apiUrl;
  authUser: any;
  prizes: any[];
  running;
  gameStart = false;
  gameEnd = false;
  bonusProfile: any;

  constructor(public dialogRef: MatDialogRef<NewsfeedGameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.http
      .get(this.apiUrl + '/service/bonus/profile')
      .subscribe(data => (this.bonusProfile = data));
    this.authUser = JSON.parse(this.authService.getUserData());
    this.http.get(this.apiUrl + '/service/game/getRewards').subscribe((data: any) => {
      this.prizes = data.prizes;
    });
  }

  start() {
    const gameConfirmation = confirm('Play this game will cost 250 points, are you sure to play?');
    if (gameConfirmation) {
      if (!(this.bonusProfile.balancePoints >= 250)) {
        alert('You balance points is not enough to play the game.');
        return;
      }
      const pointTransactionModel = {
        sender: this.authUser._id,
        // receiver: data.receiver,
        points: 250,
        type: 'Game',
        source: 'GameCost'
      };
      this.http.post(this.apiUrl + '/service/pointTransaction', pointTransactionModel).subscribe((res) => {
        this.playGame();
      });
    }
  }

  playGame() {
    // emit value every 1s
    const source = interval(100);
    // after 5 seconds, emit value
    const timer$ = timer(5000);
    // when timer emits after 5s, complete source
    const example = source.pipe(
      takeUntil(timer$),
      finalize(() => {
        console.log('Sequence complete');
        const rewardTransactionModel = {
          winner: this.authUser._id,
          rewardId: this.running._id,
          rewardName: this.running.name,
        };
        this.http.post(this.apiUrl + '/service/rewardTransaction', rewardTransactionModel).subscribe(() => {
          this.gameEnd = true;
          alert('Congraduration! You are won the prize: ' + this.running.name);
        });
      }),
    );
    // output: 0,1,2,3
    const subscribe = example.subscribe(val => {
      this.running = this.prizes[Math.floor((Math.random() * this.prizes.length))];
    });
  }

  exit() {
    this.dialogRef.close();
  }

}
