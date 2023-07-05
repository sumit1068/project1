import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sublectdemo1Component } from './sublectdemo1.component';

describe('Sublectdemo1Component', () => {
  let component: Sublectdemo1Component;
  let fixture: ComponentFixture<Sublectdemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sublectdemo1Component]
    });
    fixture = TestBed.createComponent(Sublectdemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
