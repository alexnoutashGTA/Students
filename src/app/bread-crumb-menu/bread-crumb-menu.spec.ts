import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbMenu } from './bread-crumb-menu';

describe('BreadCrumbMenu', () => {
  let component: BreadCrumbMenu;
  let fixture: ComponentFixture<BreadCrumbMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadCrumbMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadCrumbMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
