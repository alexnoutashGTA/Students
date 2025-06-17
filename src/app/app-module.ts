import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SideMenu } from './side-menu/side-menu';
import { Home } from './home/home';
import { Detail } from './detail/detail';
import {BreadCrumbMenu} from './bread-crumb-menu/bread-crumb-menu';
import {Profile} from './profile/profile';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
        AppRoutingModule,FormsModule,ReactiveFormsModule,
    ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

