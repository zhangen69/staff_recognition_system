import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsDashboardComponent } from './awards-dashboard.component';

describe('AwardsDashboardComponent', () => {
  let component: AwardsDashboardComponent;
  let fixture: ComponentFixture<AwardsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
