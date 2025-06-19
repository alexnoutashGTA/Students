import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SideMenu } from './side-menu/side-menu';
import { Home } from './home/home';
import { Detail } from './detail/detail';
import {BreadCrumbMenu} from './bread-crumb-menu/bread-crumb-menu';
<<<<<<< HEAD
import { Profile } from './profile/profile';
<<<<<<< HEAD
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
=======
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
>>>>>>> 1b32d4d (validation)
=======
import {Profile} from './profile/profile';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
>>>>>>> fdc8a96 (WIP on MaiaAngular)

@NgModule({
  declarations: [
    BreadCrumbMenu,
    App,
    SideMenu,
    Home,
    Detail,
    Profile

  ],
    imports: [
        BrowserModule,
<<<<<<< HEAD
        AppRoutingModule,
<<<<<<< HEAD
        FormsModule, ReactiveFormsModule,
=======
        FormsModule,ReactiveFormsModule,
>>>>>>> 1b32d4d (validation)
=======
        AppRoutingModule,FormsModule,ReactiveFormsModule,
>>>>>>> fdc8a96 (WIP on MaiaAngular)
    ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

