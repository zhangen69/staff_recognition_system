import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimableDetailComponent } from './claimable-detail.component';

describe('ClaimableDetailComponent', () => {
  let component: ClaimableDetailComponent;
  let fixture: ComponentFixture<ClaimableDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimableDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
