import {FormGroup, ReactiveFormsModule} from '@angular/forms';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messages } from './messages';
import {CommonModule} from '@angular/common';
<<<<<<< HEAD
import {ReactiveFormsModule} from '@angular/forms';
=======
>>>>>>> 1edb8c3 (Sample Forms Test)
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
<<<<<<< HEAD

      ]

=======
      ]
>>>>>>> 1edb8c3 (Sample Forms Test)
    })
      .compileComponents();

    fixture = TestBed.createComponent(Messages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

<<<<<<< HEAD
it('First Form Test', () => {
  let ourFormsGroup = component.submitForm;
  console.log("ourFormsGroup");
  console.log(ourFormsGroup);
  expect(ourFormsGroup.controls.userName.value).toEqual('');
})

=======
  it('First Form Test', () => {
    let ourFormsGroup = component.profileForm;
    console.log("ourFormsGroup");
    console.log(ourFormsGroup);
    expect(ourFormsGroup.controls.userName.value).toEqual('Alex')
  })
<<<<<<< HEAD
>>>>>>> 1edb8c3 (Sample Forms Test)
=======
  it('Second Form Test', () => {
    let ourFormsGroup = component.profileForm;
    console.log("ourFormsGroup");
    console.log(ourFormsGroup);
    expect(ourFormsGroup.controls.message.value).toEqual('')
  })
  it('Third Form Test', () => {
    let ourFormsGroup = component.profileForm;
    console.log("ourFormsGroup");
    console.log(ourFormsGroup);
    expect(ourFormsGroup.controls.date.value).toBe("");
  })
>>>>>>> 5241b0d (Added unit tests for message and date and fixed date format)
});
