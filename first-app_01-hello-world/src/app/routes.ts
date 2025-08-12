// This file is where we will define the routes in the application.
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Details } from './details/details';

const routeConfig: Routes = [
    {
        // ex. http://localhost:4200
        path: '',
        component: Home,
        title: 'Home page',
    },
    {
        // ex. http://localhost:4200/details/0
        path: 'details/:id',
        component: Details,
        title: 'Home details',
    },
];
export default routeConfig;