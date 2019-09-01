import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReceivedComponent } from './profile-received.component';

describe('ProfileReceivedComponent', () => {
  let component: ProfileReceivedComponent;
  let fixture: ComponentFixture<ProfileReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
