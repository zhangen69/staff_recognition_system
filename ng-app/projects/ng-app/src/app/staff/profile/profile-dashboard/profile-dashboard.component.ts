import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss']
})
export class ProfileDashboardComponent implements OnInit {
  profile: any;
  bonusProfile: any;
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.apiUrl + '/service/user/fetchProfile').subscribe(({ data }: any) => {
      this.profile = data;
      this.http.get(this.apiUrl + '/service/bonus/profile').subscribe((data) => {
        this.bonusProfile = data;
      });
    });
  }

}
