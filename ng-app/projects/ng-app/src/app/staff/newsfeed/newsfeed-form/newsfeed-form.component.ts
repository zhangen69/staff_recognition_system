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
import { ToastrService } from 'ngx-toastr';

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
  dialogForm: any = {
    hashtags: [],
    receiver: null,
    bonus: 0
  };
  apiUrl = environment.apiUrl;
  authUser: any;
  bonusProfile: any;

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.authUser = JSON.parse(this.authService.getUserData());
    this.http
      .get(this.apiUrl + '/service/bonus/profile')
      .subscribe(data => (this.bonusProfile = data));
  }

  openDialogWithoutRef(templateName) {
    this.dialog.open(this[templateName], { disableClose: true });
  }

  closeDialog(prop) {
    if (prop === 'bonus') {
      if (this.dialogForm[prop] < 5) {
        alert('Bonus cannot lower than 5 points');
        return;
      } else if (this.dialogForm[prop] > 10) {
        alert('Bonus cannot greater than 10 points');
        return;
      }
    }

    if (prop !== 'hashtag') {
      this.formData[prop] = this.dialogForm[prop];
    } else {
      this.formData.hashtags = this.dialogForm.hashtags.map(
        hashtag => hashtag.name
      );
    } 
    
    this.dialog.closeAll();
  }

  cancelDialog() {
    this.dialog.closeAll();
  }

  onCreatePost(form: NgForm) {
    if (this.bonusProfile.balancePoints < this.formData.bonus) {
      alert('Your balance bonus is not enough!');
      return;
    } else if (!this.formData.bonus || !this.formData.receiver || !this.formData.hashtags) {
      alert('Please fill-in the information of bonus, receiver and hashtags');
      return;
    }

    this.http.get(this.apiUrl + '/service/bonus/checkGiveValidation/' + this.formData.receiver._id).subscribe((res: any) => {
      if (!res.valid) {
        alert(res.message);
      } else {
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
    });
  }
}
