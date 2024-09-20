import { Routes } from '@angular/router';
import { AddUserComponent } from './admin/add-user/add-user.component';

export const routes: Routes = [
    /** lazi loading can create as 1.loadChildren & 2.loadComponent */
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: "add-user",
        loadComponent: () => import('./admin/add-user/add-user.component').then(m=> m.AddUserComponent)
    },
    /** lazi loading end */

    /** normal component add to route 
    {
        path: "add-user",
        component: AddUserComponent
    }
     without lazi loading end */
];
