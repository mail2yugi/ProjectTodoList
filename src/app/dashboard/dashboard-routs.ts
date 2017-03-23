/**
 * Created by yugandhar.ds on 3/21/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard-component';

export const routing: ModuleWithProviders = RouterModule.forChild(
  <Routes>[
    { path: 'home', component: DashboardComponent}
  ]);
