import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obsrvabledemo3Component } from './obsrvabledemo3.component';

describe('Obsrvabledemo3Component', () => {
  let component: Obsrvabledemo3Component;
  let fixture: ComponentFixture<Obsrvabledemo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Obsrvabledemo3Component]
    });
    fixture = TestBed.createComponent(Obsrvabledemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
