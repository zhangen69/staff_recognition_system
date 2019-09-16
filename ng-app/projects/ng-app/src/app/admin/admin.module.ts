import { AwardsDashboardComponent } from './awards/awards-dashboard/awards-dashboard.component';
import { AdminRoutingModule } from './admin.routing.module';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffFormComponent } from './staff/staff-form/staff-form.component';
import { StaffListComponent } from './staff/staff-list/staff-list.component';
import { ManualFormComponent } from './awards/manual-form/manual-form.component';
import { ManualListComponent } from './awards/manual-list/manual-list.component';
import { ClaimableFormComponent } from './awards/claimable-form/claimable-form.component';
import { ClaimableListComponent } from './awards/claimable-list/claimable-list.component';
import { ClaimableDetailComponent } from './awards/claimable-detail/claimable-detail.component';
import { ManualDetailComponent } from './awards/manual-detail/manual-detail.component';
import { AwardsLogComponent } from './awards/awards-log/awards-log.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth/auth.interceptor';
import { AwardsSettingFormComponent } from './awards/awards-setting-form/awards-setting-form.component';
import { AwardsSettingListComponent } from './awards/awards-setting-list/awards-setting-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    StaffFormComponent,
    StaffListComponent,
    ManualFormComponent,
    ManualListComponent,
    ClaimableFormComponent,
    ClaimableListComponent,
    ClaimableDetailComponent,
    ManualDetailComponent,
    AwardsLogComponent,
    AwardsDashboardComponent,
    AwardsSettingFormComponent,
    AwardsSettingListComponent,
  ],
  imports: [AdminRoutingModule, FlexLayoutModule, SharedModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class AdminModule {}
