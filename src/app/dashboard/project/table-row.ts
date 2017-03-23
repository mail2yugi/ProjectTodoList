/**
 * Created by yugandhar.ds on 3/23/2017.
 */
import {Component, OnInit, ViewContainerRef, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: '[ts-table-row]',
  template: `<td><a (click)="navigateToDetails($event)">{{project.projectId}}</a></td>
              <td>{{project.projectName}}</td>
              <td>{{project.projectStatus}}</td>`
})
export class TableRow implements OnInit {
  @Input() project:any;

constructor(private _router:Router){}

  public ngOnInit():void {
    console.log('Table Row');

  }

  public navigateToDetails(event:any) {
    this._router.navigate(['/project',event.target.innerHTML]);
  }
}
