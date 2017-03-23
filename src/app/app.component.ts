import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {BreadcrumbService} from "./app-service";

@Component({
  selector: 'ts-app',
  templateUrl: '/app/app-component.html'
})

export class AppComponent {
  constructor(public breadCrumbSvc : BreadcrumbService, private _router:Router) {
    this.breadCrumbSvc.setBreadCrumb('Project Dashboard');
  }

  public navigateHome(){
    this._router.navigate(['home']);;
  }
}
