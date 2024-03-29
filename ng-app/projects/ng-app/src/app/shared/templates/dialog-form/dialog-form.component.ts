import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface IDialogFormData {
  domain?: string;
  data: any;
  title: string;
  callback?: boolean;
}

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {
  formData: any = {};
  title: string;
  callback = false;

  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public params: IDialogFormData
  ) { }

  ngOnInit(): void {
    this.formData = this.params.data;
    this.callback = this.params.callback;
    this.title = this.params.title;
  }

  onNoClick(data = null): void {
    this.dialogRef.close(data);
  }

  submitFunc(item) {
    if (this.callback) {
      this.onNoClick(item);
    }
  }
}
