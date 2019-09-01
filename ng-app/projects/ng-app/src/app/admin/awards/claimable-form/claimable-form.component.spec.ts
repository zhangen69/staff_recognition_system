import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimableFormComponent } from './claimable-form.component';

describe('ClaimableFormComponent', () => {
  let component: ClaimableFormComponent;
  let fixture: ComponentFixture<ClaimableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
