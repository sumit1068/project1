import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TektutorialshubTemplateDrivenFormSetvalueComponent } from './tektutorialshub-template-driven-form-setvalue.component';

describe('TektutorialshubTemplateDrivenFormSetvalueComponent', () => {
  let component: TektutorialshubTemplateDrivenFormSetvalueComponent;
  let fixture: ComponentFixture<TektutorialshubTemplateDrivenFormSetvalueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TektutorialshubTemplateDrivenFormSetvalueComponent]
    });
    fixture = TestBed.createComponent(TektutorialshubTemplateDrivenFormSetvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
