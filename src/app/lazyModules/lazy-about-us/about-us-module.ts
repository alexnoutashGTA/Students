import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing-module';
import { AboutUs } from '../../about-us/about-us';
import {LazyMessagesModule} from "../lazy-messages/lazy-messages-module";


@NgModule({
  declarations: [
    AboutUs
  ],
    imports: [
        CommonModule,
        AboutUsRoutingModule,
        LazyMessagesModule
    ]
})
export class AboutUsModule { }
