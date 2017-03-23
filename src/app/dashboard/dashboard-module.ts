/**
 * Created by yugandhar.ds on 3/21/2017.
 */

import {NgModule, Pipe} from '@angular/core';
import {routing} from './dashboard-routs';
import {DashboardComponent,todoFilterPipe} from './dashboard-component';
import {DashboardService} from './dashboard-service';
import {TableRow} from "./project/table-row";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    DashboardComponent,
    TableRow,
    todoFilterPipe
  ],
  exports: [TableRow],
  providers: [DashboardService],
  entryComponents: [TableRow]
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class DashboardModule {
}
