import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-newsfeed-detail',
  templateUrl: './newsfeed-detail.component.html',
  styleUrls: ['./newsfeed-detail.component.scss']
})
export class NewsfeedDetailComponent implements OnInit {
  @Input()
  data: any;
  showComments = false;
  showCommentInput = false;
  lastUpdateDuration = '2 min ago';

  constructor() { }

  ngOnInit() {
    const now = moment();
    const lastUpdate = moment(this.data.audit.updatedDate);
    const diff = lastUpdate.diff(now, 'minutes');
    this.lastUpdateDuration = moment.duration(diff, 'minutes').humanize(true);
  }

  showCommentsToggle(isShow) {
    this.showComments = isShow || !this.showComments;
  }

  addCommentToggle(isShow) {
    this.showCommentInput = isShow || !this.showCommentInput;
  }

  getFirstLetter(name) {
    return name.split('')[0].toUpperCase();
  }

}
