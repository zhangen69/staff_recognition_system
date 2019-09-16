import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsSettingFormComponent } from './awards-setting-form.component';

describe('AwardsSettingFormComponent', () => {
  let component: AwardsSettingFormComponent;
  let fixture: ComponentFixture<AwardsSettingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsSettingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsSettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
