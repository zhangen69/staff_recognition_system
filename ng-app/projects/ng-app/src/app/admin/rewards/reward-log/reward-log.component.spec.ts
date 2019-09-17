import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardLogComponent } from './reward-log.component';

describe('RewardLogComponent', () => {
  let component: RewardLogComponent;
  let fixture: ComponentFixture<RewardLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
