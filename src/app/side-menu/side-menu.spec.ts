import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenu } from './side-menu';

xdescribe('SideMenu', () => {
  let component: SideMenu;
  let fixture: ComponentFixture<SideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
