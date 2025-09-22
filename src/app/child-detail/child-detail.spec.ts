import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDetail } from './child-detail';

describe('ChildDetail', () => {
  let component: ChildDetail;
  let fixture: ComponentFixture<ChildDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
