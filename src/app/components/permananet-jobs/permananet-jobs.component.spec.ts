import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermananetJobsComponent } from './permananet-jobs.component';

describe('PermananetJobsComponent', () => {
  let component: PermananetJobsComponent;
  let fixture: ComponentFixture<PermananetJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermananetJobsComponent]
    });
    fixture = TestBed.createComponent(PermananetJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
