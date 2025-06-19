import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messages } from './messages';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AppModule} from '../app-module';

describe('Messages', () => {
  let component: Messages;
  let fixture: ComponentFixture<Messages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Messages],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        AppModule

      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(Messages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('First Form Test', () => {
  let ourFormsGroup = component.submitForm;
  console.log("ourFormsGroup");
  console.log(ourFormsGroup);
  expect(ourFormsGroup.controls..value).toEqual('Alex')
})

});
