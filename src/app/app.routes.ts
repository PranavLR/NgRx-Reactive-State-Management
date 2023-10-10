import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'register', loadChildren: () => import('@app/auth/auth-routing').then(m => m.registerRoutes)  },
];



