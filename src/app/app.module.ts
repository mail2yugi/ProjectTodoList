import { NgModule  }      from '@angular/core';
import  {CommonModule} from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import {routes} from './app-routes';
import { AppComponent }  from './app.component';
import {RouterModule} from '@angular/router';
import {DashboardModule} from './dashboard/dashboard-module';
import {BreadcrumbService} from './app-service';
import { HttpModule } from '@angular/http';
import {DashboardComponent} from './dashboard/dashboard-component';

@NgModule({
  imports: [BrowserModule,HttpModule,CommonModule,
    RouterModule.forRoot(routes, {useHash: true}),
    DashboardModule
  ],
  declarations: [AppComponent],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
