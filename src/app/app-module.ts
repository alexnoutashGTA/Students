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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
>>>>>>> 9d7ff11 (Changes made to form so far)

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
        FormsModule, ReactiveFormsModule,
>>>>>>> 9d7ff11 (Changes made to form so far)
    ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

