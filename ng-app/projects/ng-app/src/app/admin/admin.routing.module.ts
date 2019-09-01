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

const routes: Routes = [
  {
    path: 'awards',
    component: AwardsDashboardComponent,
    children: [
      {
        path: 'log',
        component: AwardsLogComponent,
      },
      {
        path: 'claimable',
        component: ClaimableListComponent,
        children: [
          {
            path: 'new',
            component: ClaimableFormComponent,
          },
          {
            path: 'edit/:id',
            component: ClaimableFormComponent,
          },
          {
            path: 'detail/:id',
            component: ClaimableDetailComponent,
          },
          {
            path: 'list',
            component: ClaimableListComponent,
          },
        ],
      },
      {
        path: 'manual',
        component: ManualListComponent,
        children: [
          {
            path: 'new',
            component: ManualFormComponent,
          },
          {
            path: 'edit/:id',
            component: ManualFormComponent,
          },
          {
            path: 'detail/:id',
            component: ManualDetailComponent,
          },
          {
            path: 'list',
            component: ManualListComponent,
          },
        ]
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
