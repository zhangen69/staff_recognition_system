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
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent, StaffFormComponent, StaffListComponent, ManualFormComponent, ManualListComponent, ClaimableFormComponent, ClaimableListComponent, ClaimableDetailComponent, ManualDetailComponent, AwardsLogComponent, AwardsDashboardComponent],
  imports: [AdminRoutingModule, CommonModule, FlexLayoutModule, SharedModule]
})
export class AdminModule { }
