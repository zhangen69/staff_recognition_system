import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed-list',
  templateUrl: './newsfeed-list.component.html',
  styleUrls: ['./newsfeed-list.component.scss']
})
export class NewsfeedListComponent implements OnInit {
  posts: any[] = [];
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.posts.push({
    //   id: 1,
    //   postBy: 'Jacob',
    //   point: 5,
    //   tags: [
    //     '@barko'
    //   ],
    //   hashtags: [
    //     'teamwork',
    //   ],
    //   message: '+point @barko #teamwork good',
    //   comments: [],
    // });
    this.onLoadPage();
  }

  onLoadPage() {
    const queryModel = {
      includes: ['receiver'],
    };
    this.http.get(this.apiUrl + '/service/post?queryModel=' + JSON.stringify(queryModel)).subscribe(({ data }: any) => {
      this.posts = data;
    });
  }

}
