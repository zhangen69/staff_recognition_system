import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
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

  formData: any = {};

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogWithoutRef(templateName) {
    this.dialog.open(this[templateName]);
  }

}
