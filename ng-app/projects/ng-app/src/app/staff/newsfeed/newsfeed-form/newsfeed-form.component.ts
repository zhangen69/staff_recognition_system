import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-newsfeed-form',
  templateUrl: './newsfeed-form.component.html',
  styleUrls: ['./newsfeed-form.component.scss']
})
export class NewsfeedFormComponent implements OnInit {
  @ViewChild('add_bonus_dialog', { static: true }) add_bonus_dialog: TemplateRef<any>;
  @ViewChild('tag_person_dialog', { static: true }) tag_person_dialog: TemplateRef<any>;
  @ViewChild('hashtag_dialog', { static: true }) hashtag_dialog: TemplateRef<any>;

  @Output()
  reload = new EventEmitter();

  formData: any = {};
  dialogForm: any = {};
  apiUrl = environment.apiUrl;

  constructor(private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
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

  onCreatePost() {
    this.http.post(this.apiUrl + '/service/post', this.formData).subscribe(({ data }: any) => {
      this.formData = {};
      this.dialogForm = {};
      const transactionData = {

      };
      this.http.post(this.apiUrl + '/service/pointTransaction', transactionData).subscribe(() => {
        this.reload.emit();
      });
    });
  }

}
