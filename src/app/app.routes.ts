import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Header } from './component/header/header';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path:'header',
    component:Header
  }
];
