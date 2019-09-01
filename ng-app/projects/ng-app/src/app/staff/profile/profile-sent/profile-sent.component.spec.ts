import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSentComponent } from './profile-sent.component';

describe('ProfileSentComponent', () => {
  let component: ProfileSentComponent;
  let fixture: ComponentFixture<ProfileSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
