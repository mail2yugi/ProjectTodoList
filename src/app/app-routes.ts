/**
 * Created by yugandhar.ds on 3/21/2017.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes:Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'project', loadChildren: 'app/dashboard/project/project-info-module#ProjectInfoModule' },
  {path: '**', redirectTo: 'home', pathMatch: 'full'} // Invalid routes redirect back to home
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
