import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  showCommentsToggle(isShow) {
    this.showComments = isShow || !this.showComments;
  }

  addCommentToggle(isShow) {
    this.showCommentInput = isShow || !this.showCommentInput;
  }

}
