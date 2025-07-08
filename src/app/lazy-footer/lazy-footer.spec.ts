import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyFooter } from './lazy-footer';

describe('LazyFooter', () => {
  let component: LazyFooter;
  let fixture: ComponentFixture<LazyFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
