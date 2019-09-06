import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newsfeed-detail',
  templateUrl: './newsfeed-detail.component.html',
  styleUrls: ['./newsfeed-detail.component.scss']
})
export class NewsfeedDetailComponent implements OnInit {
  @Input()
  data: any;
  showComment = false;

  constructor() { }

  ngOnInit() {
  }

  commentToggle(isShow) {
    this.showComment = isShow || !this.showComment;
  }

}
