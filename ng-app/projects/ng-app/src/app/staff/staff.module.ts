import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewsfeedFormComponent } from './newsfeed/newsfeed-form/newsfeed-form.component';
import { NewsfeedListComponent } from './newsfeed/newsfeed-list/newsfeed-list.component';
import { NewsfeedDetailComponent } from './newsfeed/newsfeed-detail/newsfeed-detail.component';
import { NewsfeedDashboardComponent } from './newsfeed/newsfeed-dashboard/newsfeed-dashboard.component';
import { NewsfeedGameComponent } from './newsfeed/newsfeed-game/newsfeed-game.component';
import { ProfileDashboardComponent } from './profile/profile-dashboard/profile-dashboard.component';
import { ProfileBadgesComponent } from './profile/profile-badges/profile-badges.component';
import { ProfileRewardsComponent } from './profile/profile-rewards/profile-rewards.component';
import { ProfileTeamsComponent } from './profile/profile-teams/profile-teams.component';
import { ProfileSentComponent } from './profile/profile-sent/profile-sent.component';
import { ProfileReceivedComponent } from './profile/profile-received/profile-received.component';
import { ProfileAchievementsComponent } from './profile/profile-achievements/profile-achievements.component';
import { StaffRoutingModule } from './staff.routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [NewsfeedFormComponent, NewsfeedListComponent, NewsfeedDetailComponent, NewsfeedDashboardComponent, NewsfeedGameComponent, ProfileDashboardComponent, ProfileBadgesComponent, ProfileRewardsComponent, ProfileTeamsComponent, ProfileSentComponent, ProfileReceivedComponent, ProfileAchievementsComponent],
  imports: [StaffRoutingModule, CommonModule, MatCardModule, MatIconModule, MatButtonModule]
})
export class StaffModule { }
