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
              { url: '/user/profile', name: 'My Profile' },
              { url: '/user/changePassword', name: 'Change Password' }
            ]
      },
      {
          name: 'Staff',
          children: [
              { url: '/admin/staff', name: 'Manage' },
              { url: '/admin/staff/add', name: 'New' }
            ]
      },
  ];

  private _mobileQueryListener: () => void;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
      this.isAuth = this.authService.getIsAuth();
      this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuth => {
          this.isAuth = isAuth;
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
