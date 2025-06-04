import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SideMenu } from './side-menu/side-menu';
import { BreadCrumbMenu } from './bread-crumb-menu/bread-crumb-menu';

@NgModule({
  declarations: [
    App,
    SideMenu,
    BreadCrumbMenu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
