import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedListComponent } from './newsfeed-list.component';

describe('NewsfeedListComponent', () => {
  let component: NewsfeedListComponent;
  let fixture: ComponentFixture<NewsfeedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
