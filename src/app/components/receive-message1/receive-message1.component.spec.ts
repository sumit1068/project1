import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveMessage1Component } from './receive-message1.component';

describe('ReceiveMessage1Component', () => {
  let component: ReceiveMessage1Component;
  let fixture: ComponentFixture<ReceiveMessage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveMessage1Component]
    });
    fixture = TestBed.createComponent(ReceiveMessage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
