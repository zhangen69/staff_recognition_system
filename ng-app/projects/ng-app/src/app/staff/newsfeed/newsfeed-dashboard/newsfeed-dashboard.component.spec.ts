import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedDashboardComponent } from './newsfeed-dashboard.component';

describe('NewsfeedDashboardComponent', () => {
  let component: NewsfeedDashboardComponent;
  let fixture: ComponentFixture<NewsfeedDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
