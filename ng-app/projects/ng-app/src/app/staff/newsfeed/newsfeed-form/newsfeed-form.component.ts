import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsfeedListComponent } from '../newsfeed-list/newsfeed-list.component';
import { AuthService } from '../../../shared/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newsfeed-form',
  templateUrl: './newsfeed-form.component.html',
  styleUrls: ['./newsfeed-form.component.scss']
})
export class NewsfeedFormComponent implements OnInit {
  @ViewChild('add_bonus_dialog', { static: true })
  add_bonus_dialog: TemplateRef<any>;
  @ViewChild('tag_person_dialog', { static: true })
  tag_person_dialog: TemplateRef<any>;
  @ViewChild('hashtag_dialog', { static: true }) hashtag_dialog: TemplateRef<
    any
  >;

  @Input() newsfeedList: NewsfeedListComponent;

  formData: any = {};
  dialogForm: any = {};
  apiUrl = environment.apiUrl;
  authUser: any;

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authUser = JSON.parse(this.authService.getUserData());
  }

  openDialogWithoutRef(templateName) {
    this.dialog.open(this[templateName]);
  }

  closeDialog(prop) {
    this.formData[prop] = this.dialogForm[prop];
    this.dialog.closeAll();
  }

  cancelDialog(prop) {
    this.dialog.closeAll();
  }

  onCreatePost(form: NgForm) {
    this.http
      .post(this.apiUrl + '/service/post', this.formData)
      .subscribe(({ data }: any) => {
        this.formData = {};
        this.dialogForm = {};
        form.resetForm();
        const transactionData = {
          sender: this.authUser._id,
          receiver: data.receiver,
          points: data.bonus,
          type: 'Transfer',
          source: 'Post',
          sourceId: data._id
        };

        this.http
          .post(this.apiUrl + '/service/pointTransaction', transactionData)
          .subscribe(() => {
            this.newsfeedList.onLoadPage();
          });
      });
  }
}
