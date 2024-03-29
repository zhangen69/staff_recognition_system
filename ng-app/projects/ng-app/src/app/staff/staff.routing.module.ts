import { AuthGuard } from './../shared/auth/auth.guard';
import { ProfileRewardsComponent } from './profile/profile-rewards/profile-rewards.component';
import { ProfileBadgesComponent } from './profile/profile-badges/profile-badges.component';
import { ProfileTeamsComponent } from './profile/profile-teams/profile-teams.component';
import { ProfileSentComponent } from './profile/profile-sent/profile-sent.component';
import { ProfileReceivedComponent } from './profile/profile-received/profile-received.component';
import { ProfileAchievementsComponent } from './profile/profile-achievements/profile-achievements.component';
import { NewsfeedDashboardComponent } from './newsfeed/newsfeed-dashboard/newsfeed-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsfeedGameComponent } from './newsfeed/newsfeed-game/newsfeed-game.component';
import { ProfileDashboardComponent } from './profile/profile-dashboard/profile-dashboard.component';

const routes: Routes = [
    {
        path: 'newsfeed',
        canActivate: [AuthGuard],
        component: NewsfeedDashboardComponent,
        children: [
            {
                path: 'game',
                component: NewsfeedGameComponent,
            }
        ]
    },
    {
        path: 'profile',
        children: [
            {
                path: '',
                component: ProfileDashboardComponent,
            },
            {
                path: 'achievements',
                component: ProfileAchievementsComponent,
            },
            {
                path: 'received',
                component: ProfileReceivedComponent,
            },
            {
                path: 'sent',
                component: ProfileSentComponent,
            },
            {
                path: 'teams',
                component: ProfileTeamsComponent,
            },
            {
                path: 'badges',
                component: ProfileBadgesComponent,
            },
            {
                path: 'rewards',
                component: ProfileRewardsComponent,
            },
        ]
    },
    { path: '', redirectTo: '/newsfeed', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class StaffRoutingModule { }
