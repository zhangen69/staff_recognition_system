import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss']
})
export class ProfileDashboardComponent implements OnInit {
  bonusProfile: any;
  apiUrl = environment.apiUrl;
  profile = this.formBuilder.group({
    _id: [null, Validators.required],
    username: [null, Validators.required],
    displayName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    avatarImageUrl: [''],
    signatureImageUrl: ['']
  });
  imagesPreview: any = {};

  constructor(private http: HttpClient, 
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.http.get(this.apiUrl + '/service/user/fetchProfile').subscribe(({ data }: any) => {
      this.profile.patchValue(data);
      this.http.get(this.apiUrl + '/service/bonus/profile').subscribe((data) => {
        this.bonusProfile = data;
      });
    });
  }

  onSubmit(formData) {
    this.http
      .put(this.apiUrl + '/service/user/updateProfile', formData)
      .subscribe((res: any) => {
        this.toastr.success(res.message);
        window.location.reload();
      });
  }

}
