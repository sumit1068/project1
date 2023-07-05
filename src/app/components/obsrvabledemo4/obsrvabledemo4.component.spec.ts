import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obsrvabledemo4Component } from './obsrvabledemo4.component';

describe('Obsrvabledemo4Component', () => {
  let component: Obsrvabledemo4Component;
  let fixture: ComponentFixture<Obsrvabledemo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Obsrvabledemo4Component]
    });
    fixture = TestBed.createComponent(Obsrvabledemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
