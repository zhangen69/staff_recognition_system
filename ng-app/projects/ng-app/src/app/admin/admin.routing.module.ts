import { DashboardComponent } from './dashboard/dashboard.component';
import { ManualDetailComponent } from './awards/manual-detail/manual-detail.component';
import { ManualFormComponent } from './awards/manual-form/manual-form.component';
import { ManualListComponent } from './awards/manual-list/manual-list.component';
import { ClaimableDetailComponent } from './awards/claimable-detail/claimable-detail.component';
import { ClaimableFormComponent } from './awards/claimable-form/claimable-form.component';
import { ClaimableListComponent } from './awards/claimable-list/claimable-list.component';
import { AwardsLogComponent } from './awards/awards-log/awards-log.component';
import { AwardsDashboardComponent } from './awards/awards-dashboard/awards-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../shared/templates/page-not-found/page-not-found.component';
import { StaffListComponent } from './staff/staff-list/staff-list.component';
import { StaffFormComponent } from './staff/staff-form/staff-form.component';

const routes: Routes = [
  {
    path: 'awards',
    children: [
      {
        path: '',
        component: AwardsDashboardComponent
      },
      {
        path: 'log',
        component: AwardsLogComponent
      },
      {
        path: 'claimable',
        children: [
          {
            path: 'new',
            component: ClaimableFormComponent
          },
          {
            path: 'edit/:id',
            component: ClaimableFormComponent
          },
          {
            path: 'detail/:id',
            component: ClaimableDetailComponent
          },
          {
            path: '',
            component: ClaimableListComponent
          }
        ]
      },
      {
        path: 'manual',
        children: [
          {
            path: 'new',
            component: ManualFormComponent
          },
          {
            path: 'edit/:id',
            component: ManualFormComponent
          },
          {
            path: 'detail/:id',
            component: ManualDetailComponent
          },
          {
            path: '',
            component: ManualListComponent
          }
        ]
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'staff',
    children: [
      {
        path: '',
        component: StaffListComponent,
      },
      {
        path: 'new',
        component: StaffFormComponent
      },
      {
        path: 'edit/:id',
        component: StaffFormComponent
      }
    ]
  },
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
