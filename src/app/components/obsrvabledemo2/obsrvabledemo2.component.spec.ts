import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obsrvabledemo2Component } from './obsrvabledemo2.component';

describe('Obsrvabledemo2Component', () => {
  let component: Obsrvabledemo2Component;
  let fixture: ComponentFixture<Obsrvabledemo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Obsrvabledemo2Component]
    });
    fixture = TestBed.createComponent(Obsrvabledemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
