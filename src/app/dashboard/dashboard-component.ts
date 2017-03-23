/**
 * Created by yugandhar.ds on 3/21/2017.
 */
import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {BreadcrumbService} from "../app-service";
import {DashboardService} from './dashboard-service';
import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name:'todoFilter'
})
export class todoFilterPipe implements PipeTransform {

  transform(items: any, filter: any): any {



    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);
      return items.filter((item:any) =>
        filterKeys.reduce((memo, keyName) =>
        (memo && new RegExp(filter[keyName], 'gi').test(item.projectName[keyName])) || filter[keyName] === "", true));
    } else {
      return items;
    }
  }
}

@Component({
  moduleId: module.id,
  selector: 'ts-dashboard',
  templateUrl: 'dashboard-component.html'
})
export class DashboardComponent implements OnInit {
  rowData:Array<any>;
  public filterText: string="";
  constructor(private _breadCrumbSvc : BreadcrumbService,
              private _svc:DashboardService) {
    this._breadCrumbSvc.setBreadCrumb('Project Dashboard');
    this._breadCrumbSvc.setHyperLink(false);
  };

  public ngOnInit():void {
    console.log('Dashboard Component');
    this._svc.getProjectList().subscribe((res) => {
      this.rowData = res.project;
    });
  }
  search(event :any) {
    this.filterText = event.target.value;
    console.log(this.filterText);
  }
}
