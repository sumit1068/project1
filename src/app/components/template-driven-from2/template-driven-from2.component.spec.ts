import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFrom2Component } from './template-driven-from2.component';

describe('TemplateDrivenFrom2Component', () => {
  let component: TemplateDrivenFrom2Component;
  let fixture: ComponentFixture<TemplateDrivenFrom2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenFrom2Component]
    });
    fixture = TestBed.createComponent(TemplateDrivenFrom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
