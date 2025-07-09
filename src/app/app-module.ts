import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SideMenu } from './side-menu/side-menu';
import { Home } from './home/home';
import {BreadCrumbMenu} from './bread-crumb-menu/bread-crumb-menu';
import { Profile } from './profile/profile';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Footer } from './footer/footer';
import { LazyFooter } from './lazy-footer/lazy-footer';
import {AdsenseModule} from 'ng2-adsense';

@NgModule({
  declarations: [
    BreadCrumbMenu,
    App,
    SideMenu,
    Home,
    Profile,
    Footer,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-7871702403906324',
      adSlot: 7259870550,
    })
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  exports: [
    Footer
  ],
  bootstrap: [App]
})
export class AppModule { }

