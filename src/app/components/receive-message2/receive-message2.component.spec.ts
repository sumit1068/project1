import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveMessage2Component } from './receive-message2.component';

describe('ReceiveMessage2Component', () => {
  let component: ReceiveMessage2Component;
  let fixture: ComponentFixture<ReceiveMessage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveMessage2Component]
    });
    fixture = TestBed.createComponent(ReceiveMessage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
