import {Routes} from '@angular/router';
import {Home} from './home/home';
import {Messages} from './messages/messages';
import {Detail} from './detail/detail';

export const MyRoutes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'messages',
    component: Messages,
  },
  {
    path: 'detail',
    component: Detail,
  },
];
