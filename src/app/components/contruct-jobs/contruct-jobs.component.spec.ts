import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContructJobsComponent } from './contruct-jobs.component';

describe('ContructJobsComponent', () => {
  let component: ContructJobsComponent;
  let fixture: ComponentFixture<ContructJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContructJobsComponent]
    });
    fixture = TestBed.createComponent(ContructJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
