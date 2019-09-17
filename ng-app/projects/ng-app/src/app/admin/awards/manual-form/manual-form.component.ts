import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { StandardService } from './../../../shared/standard/standard.service';
import { Component, OnInit } from '@angular/core';
import { IStandardFormField } from '../../../shared/standard/standard-form-field.interface';
import { PageLoaderService } from '../../../shared/templates/page-loader/page-loader.service';
import { AuthService } from '../../../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manual-form',
  templateUrl: './manual-form.component.html',
  styleUrls: ['./manual-form.component.scss']
})
export class ManualFormComponent implements OnInit {
  apiUrl = environment.apiUrl;
  authUser: any;
  callback = true;
  includes = ['receiver'];
  fields: IStandardFormField[] = [
    { name: 'role', type: 'string', displayName: 'Role/Award Name', required: true },
    { name: 'bonus', type: 'number', required: true },
    { name: 'receiver', type: 'ref', ref: 'user', refName: 'displayName', required: true },
    { name: 'message', type: 'textarea', required: true },
  ];

  constructor(private pageLoaderService: PageLoaderService, private standardService: StandardService, private http: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.standardService.init('award');
    this.authUser = JSON.parse(this.authService.getUserData());
  }

  submitFunc = (formData) => {
    this.pageLoaderService.toggle(true);
    this.standardService.submit(formData).subscribe(({ data }: any) => {
      this.pageLoaderService.toggle(false);
      // create a point transaction record
      const pointTransactionModel = {
        // sender: this.authUser._id,
        receiver: data.receiver,
        points: data.bonus,
        type: 'Award',
        source: 'ManualAward',
        sourceId: data._id,
      };
      this.http.post(this.apiUrl + '/service/pointTransaction', pointTransactionModel).subscribe((res: any) => {
        this.router.navigate(['/admin/awards/manual']);
      });
    }, (res: any) => {
      this.pageLoaderService.toggle(false);
    });
  }

}
