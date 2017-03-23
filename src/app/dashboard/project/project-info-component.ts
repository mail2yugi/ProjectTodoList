/**
 * Created by yugandhar.ds on 3/21/2017.
 */
import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BreadcrumbService} from '../../app-service';
import {ProjectInfoService} from "./project-info-service";


@Component({
  moduleId: module.id,
  selector: 'ts-project-info',
  templateUrl: 'project-info-component.html',

})
export class ProjectInfoComponent implements OnInit {
  projectData : any;
  projectId:any;

  constructor(public breadCrumbSvc : BreadcrumbService, private _svc: ProjectInfoService,private _router:ActivatedRoute) {
    this.breadCrumbSvc.setBreadCrumb('Project Dashboard/Project Information');
    this.breadCrumbSvc.setHyperLink(true);
  }
  public ngOnInit(): void {
    console.log('Info Component');
    this.projectId = this._router.snapshot.params['id']
    this._svc.getProjetInfo(this.projectId).subscribe((res) => {
      this.projectData = res.project;
    });
  }

}
