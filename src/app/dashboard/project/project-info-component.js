"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yugandhar.ds on 3/21/2017.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_service_1 = require('../../app-service');
var project_info_service_1 = require("./project-info-service");
var ProjectInfoComponent = (function () {
    function ProjectInfoComponent(breadCrumbSvc, _svc, _router) {
        this.breadCrumbSvc = breadCrumbSvc;
        this._svc = _svc;
        this._router = _router;
        this.breadCrumbSvc.setBreadCrumb('Project Dashboard/Project Information');
        this.breadCrumbSvc.setHyperLink(true);
    }
    ProjectInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Info Component');
        this.projectId = this._router.snapshot.params['id'];
        this._svc.getProjetInfo(this.projectId).subscribe(function (res) {
            _this.projectData = res.project;
        });
    };
    ProjectInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ts-project-info',
            templateUrl: 'project-info-component.html',
        }), 
        __metadata('design:paramtypes', [app_service_1.BreadcrumbService, project_info_service_1.ProjectInfoService, router_1.ActivatedRoute])
    ], ProjectInfoComponent);
    return ProjectInfoComponent;
}());
exports.ProjectInfoComponent = ProjectInfoComponent;
