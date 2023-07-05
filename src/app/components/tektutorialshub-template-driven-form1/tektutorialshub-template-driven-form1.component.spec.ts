import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TektutorialshubTemplateDrivenForm1Component } from './tektutorialshub-template-driven-form1.component';

describe('TektutorialshubTemplateDrivenForm1Component', () => {
  let component: TektutorialshubTemplateDrivenForm1Component;
  let fixture: ComponentFixture<TektutorialshubTemplateDrivenForm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TektutorialshubTemplateDrivenForm1Component]
    });
    fixture = TestBed.createComponent(TektutorialshubTemplateDrivenForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
