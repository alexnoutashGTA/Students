import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SideMenu } from './side-menu/side-menu';
import { Home } from './home/home';
import {BreadCrumbMenu} from './bread-crumb-menu/bread-crumb-menu';
<<<<<<< HEAD
import {Profile} from './profile/profile';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
=======
import { Profile } from './profile/profile';
<<<<<<< HEAD
<<<<<<< HEAD
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
<<<<<<< HEAD
>>>>>>> 9d7ff11 (Changes made to form so far)
=======
>>>>>>> 9d7ff11 (Changes made to form so far)
=======
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
>>>>>>> bb8ade2 (Added Validators to imports)
=======
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
=======
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
>>>>>>> 1b32d4d (validation)
>>>>>>> 47b1980 (validation)

@NgModule({
  declarations: [
    BreadCrumbMenu,
    App,
    SideMenu,
    Home,
    Profile

  ],
    imports: [
        BrowserModule,
<<<<<<< HEAD
        AppRoutingModule,FormsModule,ReactiveFormsModule,
=======
        AppRoutingModule,
<<<<<<< HEAD
        FormsModule, ReactiveFormsModule,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 9d7ff11 (Changes made to form so far)
=======
>>>>>>> 9d7ff11 (Changes made to form so far)
=======
=======
        FormsModule,ReactiveFormsModule,
>>>>>>> 1b32d4d (validation)
>>>>>>> 47b1980 (validation)
    ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

