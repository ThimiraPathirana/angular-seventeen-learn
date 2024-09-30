import { Routes } from '@angular/router';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';

export const routes: Routes = [
  /** lazi loading module     1.loadChildren */
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  /**  lazi loading component  2.loadComponent */
  {
    path: 'add-user',
    loadComponent: () =>
      import('./admin/add-user/add-user.component').then(
        (m) => m.AddUserComponent
      ),
  },
  /** lazi loading end */

  /** normal component add to route 
    {
        path: "add-user",
        component: AddUserComponent
    }
     without lazi loading end */

  {
    path: 'built-in-pipes',
    component: BuiltInPipesComponent,
  },
];
