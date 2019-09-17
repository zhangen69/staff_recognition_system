import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardFormComponent } from './reward-form.component';

describe('RewardFormComponent', () => {
  let component: RewardFormComponent;
  let fixture: ComponentFixture<RewardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
