import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedGameComponent } from './newsfeed-game.component';

describe('NewsfeedGameComponent', () => {
  let component: NewsfeedGameComponent;
  let fixture: ComponentFixture<NewsfeedGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
