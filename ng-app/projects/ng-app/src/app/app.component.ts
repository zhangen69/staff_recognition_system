import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './shared/auth/auth.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-app';
  isAuth = false;
  sidenavOpened = true;
  mobileQuery: MediaQueryList;
  routes = [
      { name: 'Newsfeed', url: '/newsfeed' },
      {
          name: 'Profile',
          children: [
              { url: '/profile', name: 'My Profile' },
            //   { url: '/profile/changePassword', name: 'Change Password' }
            ]
      },
      {
          name: 'Staff',
          children: [
              { url: '/admin/staff', name: 'Manage' },
              { url: '/admin/staff/add', name: 'New' }
            ]
      },
      {
          name: 'Awards',
          children: [
              { url: '/admin/awards/manual', name: 'Manage Manual' },
            //   { url: '/admin/awards/manual/add', name: 'New Manual' },
          ]
      }
  ];

  private _mobileQueryListener: () => void;

  constructor(private authService: AuthService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
      this.isAuth = this.authService.getIsAuth();
      this.sidenavOpened = this.isAuth;
      this.authService.getAuthStatusListener().subscribe(isAuth => {
          this.isAuth = isAuth;
          this.sidenavOpened = isAuth;
      });
  }

  ngOnInit() {
      this.authService.autoAuthUser();
  }

  ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onLogout() {
      this.authService.logout();
  }
}
