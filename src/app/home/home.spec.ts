import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import {Profile} from '../profile/profile'
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AppModule} from '../app-module';

xdescribe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Home, Profile],
      imports: [
        AppModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
