import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './home/home';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: Home,
    },

    { path: 'messages', loadChildren: () => import('./lazyModules/lazy-messages/lazy-messages-module').then(m => m.LazyMessagesModule) },
    { path: 'detail', loadChildren: () => import('./lazyModules/lazy-detail/lazy-detail-module').then(m => m.LazyDetailModule) },
    { path: 'faq', loadChildren: () => import('./lazyModules/lazy-faq/lazy-faq-module').then(m => m.LazyFaqModule) },
    { path: 'about-us', loadChildren: () => import('./lazyModules/lazy-about-us/about-us-module').then(m => m.AboutUsModule) },

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
