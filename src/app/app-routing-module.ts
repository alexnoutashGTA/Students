import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyRoutes} from './routes';
import {Home} from './home/home';
import {Detail} from './detail/detail';

const routes: Routes= MyRoutes;

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: Home,
    },
<<<<<<< HEAD

    { path: 'messages', loadChildren: () => import('./lazyModules/lazy-messages/lazy-messages-module').then(m => m.LazyMessagesModule) },
    { path: 'detail', loadChildren: () => import('./lazyModules/lazy-detail/lazy-detail-module').then(m => m.LazyDetailModule) },
=======
    {
      path: 'detail',
      component: Detail,
    },
    { path: 'messages', loadChildren: () => import('./lazyModules/lazy-messages/lazy-messages-module').then(m => m.LazyMessagesModule) },
>>>>>>> bc4c786 (WIP on MaiaAngular)
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
