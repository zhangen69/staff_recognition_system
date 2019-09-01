import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedFormComponent } from './newsfeed-form.component';

describe('NewsfeedFormComponent', () => {
  let component: NewsfeedFormComponent;
  let fixture: ComponentFixture<NewsfeedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
