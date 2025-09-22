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
import {AdsenseModule} from 'ng2-adsense';
import {GoogleMapsModule} from '@angular/google-maps';
import { Login } from './login/login';
import {ContentService} from './services/content-service';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    BreadCrumbMenu,
    App,
    SideMenu,
    Home,
    Profile,
    Footer,
    Login,
  ],
  imports: [
    GoogleMapsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-7871702403906324',
      adSlot: 7259870550,
    })
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ContentService,    provideHttpClient(),
    { provide: Window, useValue: window }
  ],
  exports: [
    Footer,
   ],
  bootstrap: [App]
})
export class AppModule { }

