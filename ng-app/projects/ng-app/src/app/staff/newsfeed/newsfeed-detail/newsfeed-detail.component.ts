import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-newsfeed-detail',
  templateUrl: './newsfeed-detail.component.html',
  styleUrls: ['./newsfeed-detail.component.scss']
})
export class NewsfeedDetailComponent implements OnInit {
  @Input('data')
  post: any;
  showComments = false;
  showCommentInput = false;
  lastUpdateDuration: string;
  authUser: any;
  likedPost: boolean;
  apiUrl = environment.apiUrl;
  postComment: string;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.authUser = JSON.parse(authService.getUserData());
  }

  ngOnInit() {
    this.lastUpdateDuration = this.getDuration(this.post.audit.updatedDate);
    console.log(this.authUser._id);
    const likeIndex = this.post.likes.findIndex((element) => {
      return element.likedBy === this.authUser._id;
    });
    if (likeIndex >= 0) {
      this.likedPost = true;
    }
  }

  onPostById(id: string) {
    const includes = ['receiver', 'audit.createdBy', 'comments.commentedBy'];
    this.http.get(this.apiUrl + '/service/post/' + id + '?includes=' + includes.join(',')).subscribe(({ data }: any) => {
      this.post = data;
    });
  }

  showCommentsToggle(isShow) {
    this.showComments = isShow || !this.showComments;
  }

  addCommentToggle(isShow) {
    this.showCommentInput = isShow || !this.showCommentInput;
  }

  getFirstLetter(name) {
    if (!name) {
      return;
    }

    return name.split('')[0].toUpperCase();
  }

  likePost() {
    const likeIndex = this.post.likes.findIndex((element) => {
      return element.likedBy === this.authUser._id;
    });
    if (likeIndex < 0) {
      this.post.likes.push({
        likedBy: this.authUser._id
      });
      this.likedPost = true;
    } else {
      this.post.likes.splice(likeIndex, 1);
      this.likedPost = false;
    }

    this.http.post(this.apiUrl + '/service/post', this.post).subscribe(() => {
      this.onPostById(this.post._id);
    });
  }

  sendComment() {
    const data = {
      commentedBy: this.authUser._id,
      message: this.postComment,
    };
    this.post.comments.push(data);

    this.http.post(this.apiUrl + '/service/post', this.post).subscribe(() => {
      this.onPostById(this.post._id);
    });
  }

  getDuration(date) {
    const now = moment();
    const lastUpdate = moment(date);
    const diff = lastUpdate.diff(now, 'minutes');
    return moment.duration(diff, 'minutes').humanize(true);
  }

}
