import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messages } from './messages';

describe('Messages', () => {
  let component: Messages;
  let fixture: ComponentFixture<Messages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Messages]
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

it('First Form Test', () => {
  let ourFormsGroup = component.submitForm;
  console.log("ourFormsGroup");
  console.log(ourFormsGroup);
  expect(ourFormsGroup.controls.userName.value).toEqual('Alex')
})

>>>>>>> da09f78 (changes)
});
