import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Header } from './component/header/header';
import { Details } from './component/details/details';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path:'header',
    component:Header
  },
  {
    path:'details',
    component:Details
  }
];
