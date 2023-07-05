import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoloyeeCurdComponent } from './empoloyee-curd.component';

describe('EmpoloyeeCurdComponent', () => {
  let component: EmpoloyeeCurdComponent;
  let fixture: ComponentFixture<EmpoloyeeCurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpoloyeeCurdComponent]
    });
    fixture = TestBed.createComponent(EmpoloyeeCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
