import {NgModule} from '@angular/core';
import {routing} from './project-info-routs';
import {ProjectInfoComponent} from './project-info-component';
import {ProjectInfoService} from "./project-info-service";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    routing,
    CommonModule
  ],
  declarations: [
    ProjectInfoComponent
  ],
  exports: [],
  providers: [ProjectInfoService],
  entryComponents: []
})

export class ProjectInfoModule {
}
