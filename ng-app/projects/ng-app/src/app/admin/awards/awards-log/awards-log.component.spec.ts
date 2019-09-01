import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsLogComponent } from './awards-log.component';

describe('AwardsLogComponent', () => {
  let component: AwardsLogComponent;
  let fixture: ComponentFixture<AwardsLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
