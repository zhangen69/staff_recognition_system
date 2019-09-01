import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAchievementsComponent } from './profile-achievements.component';

describe('ProfileAchievementsComponent', () => {
  let component: ProfileAchievementsComponent;
  let fixture: ComponentFixture<ProfileAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
