import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFrom1Component } from './template-driven-from1.component';

describe('TemplateDrivenFrom1Component', () => {
  let component: TemplateDrivenFrom1Component;
  let fixture: ComponentFixture<TemplateDrivenFrom1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenFrom1Component]
    });
    fixture = TestBed.createComponent(TemplateDrivenFrom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
