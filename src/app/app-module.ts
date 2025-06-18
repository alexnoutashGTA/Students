import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SideMenu } from './side-menu/side-menu';
import { Home } from './home/home';
import { Messages } from './messages/messages';
import { Detail } from './detail/detail';
import {BreadCrumbMenu} from './bread-crumb-menu/bread-crumb-menu';
import { Profile } from './profile/profile';
<<<<<<< HEAD
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
=======
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
>>>>>>> 1b32d4d (validation)

@NgModule({
  declarations: [
    BreadCrumbMenu,
    App,
    SideMenu,
    Home,
    Messages,
    Detail,
    Profile
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
<<<<<<< HEAD
        FormsModule, ReactiveFormsModule,
=======
        FormsModule,ReactiveFormsModule,
>>>>>>> 1b32d4d (validation)
    ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

