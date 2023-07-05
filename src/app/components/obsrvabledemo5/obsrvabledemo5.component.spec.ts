import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obsrvabledemo5Component } from './obsrvabledemo5.component';

describe('Obsrvabledemo5Component', () => {
  let component: Obsrvabledemo5Component;
  let fixture: ComponentFixture<Obsrvabledemo5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Obsrvabledemo5Component]
    });
    fixture = TestBed.createComponent(Obsrvabledemo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
