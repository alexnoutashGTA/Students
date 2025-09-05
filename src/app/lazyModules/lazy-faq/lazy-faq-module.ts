import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyFaqRoutingModule } from './lazy-faq-routing-module';
import {Faq} from '../../faq/faq';
import {ContentService} from '../../services/content-service';
import {provideHttpClient} from '@angular/common/http';
import {LazyMessagesModule} from "../lazy-messages/lazy-messages-module";


@NgModule({
  declarations: [
    Faq
  ],
    imports: [
        CommonModule,
        LazyFaqRoutingModule,
        LazyMessagesModule
    ],
  providers: [
    ContentService,
    provideHttpClient(),
  ]
})
export class LazyFaqModule { }
