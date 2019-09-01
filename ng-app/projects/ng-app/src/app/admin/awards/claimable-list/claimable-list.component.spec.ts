import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimableListComponent } from './claimable-list.component';

describe('ClaimableListComponent', () => {
  let component: ClaimableListComponent;
  let fixture: ComponentFixture<ClaimableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
