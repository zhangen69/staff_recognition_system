import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-newsfeed-form',
  templateUrl: './newsfeed-form.component.html',
  styleUrls: ['./newsfeed-form.component.scss']
})
export class NewsfeedFormComponent implements OnInit {
  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }

}
