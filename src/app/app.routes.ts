import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Google } from './google/google';

export const routes: Routes = [
    {path:"" , component: Login },
    {path:"dashboard" , component:Dashboard},
    {path:"google" , component:Google}
];
