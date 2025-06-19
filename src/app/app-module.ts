import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SideMenu } from './side-menu/side-menu';
import { Home } from './home/home';
<<<<<<< HEAD
import {BreadCrumbMenu} from './bread-crumb-menu/bread-crumb-menu';
<<<<<<< HEAD
import {Profile} from './profile/profile';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
=======
=======
import { Detail } from './detail/detail';
import {BreadCrumbMenu} from './bread-crumb-menu/bread-crumb-menu';
<<<<<<< HEAD
>>>>>>> bc4c786 (WIP on MaiaAngular)
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
<<<<<<< HEAD
>>>>>>> 47b1980 (validation)
=======
=======
import {Profile} from './profile/profile';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
>>>>>>> fdc8a96 (WIP on MaiaAngular)
>>>>>>> bc4c786 (WIP on MaiaAngular)

@NgModule({
  declarations: [
    BreadCrumbMenu,
    App,
    SideMenu,
    Home,
<<<<<<< HEAD
=======
    Detail,
>>>>>>> bc4c786 (WIP on MaiaAngular)
    Profile

  ],
    imports: [
        BrowserModule,
<<<<<<< HEAD
<<<<<<< HEAD
        AppRoutingModule,FormsModule,ReactiveFormsModule,
=======
=======
>>>>>>> bc4c786 (WIP on MaiaAngular)
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
<<<<<<< HEAD
>>>>>>> 47b1980 (validation)
=======
=======
        AppRoutingModule,FormsModule,ReactiveFormsModule,
>>>>>>> fdc8a96 (WIP on MaiaAngular)
>>>>>>> bc4c786 (WIP on MaiaAngular)
    ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

