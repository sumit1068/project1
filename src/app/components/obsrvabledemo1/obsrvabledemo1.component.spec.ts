import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obsrvabledemo1Component } from './obsrvabledemo1.component';

describe('Obsrvabledemo1Component', () => {
  let component: Obsrvabledemo1Component;
  let fixture: ComponentFixture<Obsrvabledemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Obsrvabledemo1Component]
    });
    fixture = TestBed.createComponent(Obsrvabledemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
