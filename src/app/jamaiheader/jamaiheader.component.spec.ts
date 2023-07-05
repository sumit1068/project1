import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamaiheaderComponent } from './jamaiheader.component';

describe('JamaiheaderComponent', () => {
  let component: JamaiheaderComponent;
  let fixture: ComponentFixture<JamaiheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JamaiheaderComponent]
    });
    fixture = TestBed.createComponent(JamaiheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
