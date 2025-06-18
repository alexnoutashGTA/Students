import {FormGroup, ReactiveFormsModule} from '@angular/forms';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messages } from './messages';
<<<<<<< HEAD
=======
import {CommonModule} from '@angular/common';
<<<<<<< HEAD
import {ReactiveFormsModule} from '@angular/forms';
=======
>>>>>>> 1edb8c3 (Sample Forms Test)
import {AppModule} from '../app-module';
>>>>>>> 2418a27 (Sample Forms Test)

describe('Messages', () => {
  let component: Messages;
  let fixture: ComponentFixture<Messages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [Messages]
=======
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
>>>>>>> 2418a27 (Sample Forms Test)
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
=======

<<<<<<< HEAD
it('First Form Test', () => {
  let ourFormsGroup = component.submitForm;
  console.log("ourFormsGroup");
  console.log(ourFormsGroup);
  expect(ourFormsGroup.controls.userName.value).toEqual('');
})

<<<<<<< HEAD
>>>>>>> da09f78 (changes)
=======
=======
  it('First Form Test', () => {
    let ourFormsGroup = component.profileForm;
    console.log("ourFormsGroup");
    console.log(ourFormsGroup);
    expect(ourFormsGroup.controls.userName.value).toEqual('Alex')
  })
>>>>>>> 1edb8c3 (Sample Forms Test)
>>>>>>> 2418a27 (Sample Forms Test)
});
