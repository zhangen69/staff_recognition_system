import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed-list',
  templateUrl: './newsfeed-list.component.html',
  styleUrls: ['./newsfeed-list.component.scss']
})
export class NewsfeedListComponent implements OnInit {
  posts: any[] = [];

  constructor() { }

  ngOnInit() {
    this.posts.push({
      id: 1,
      postBy: 'Jacob',
      point: 5,
      tags: [
        '@barko'
      ],
      hashtags: [
        'teamwork',
      ],
      message: '+point @barko #teamwork good',
      comments: [],
    });
  }

}
