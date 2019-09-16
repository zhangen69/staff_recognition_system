import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsSettingListComponent } from './awards-setting-list.component';

describe('AwardsSettingListComponent', () => {
  let component: AwardsSettingListComponent;
  let fixture: ComponentFixture<AwardsSettingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsSettingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsSettingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
