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
var app_service_1 = require("../app-service");
var dashboard_service_1 = require('./dashboard-service');
var core_2 = require('@angular/core');
var todoFilterPipe = (function () {
    function todoFilterPipe() {
    }
    todoFilterPipe.prototype.transform = function (items, filter) {
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            return items.filter(function (item) {
                return filterKeys_1.reduce(function (memo, keyName) {
                    return (memo && new RegExp(filter[keyName], 'gi').test(item.projectName[keyName])) || filter[keyName] === "";
                }, true);
            });
        }
        else {
            return items;
        }
    };
    todoFilterPipe = __decorate([
        core_2.Pipe({
            name: 'todoFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], todoFilterPipe);
    return todoFilterPipe;
}());
exports.todoFilterPipe = todoFilterPipe;
var DashboardComponent = (function () {
    function DashboardComponent(_breadCrumbSvc, _svc) {
        this._breadCrumbSvc = _breadCrumbSvc;
        this._svc = _svc;
        this.filterText = "";
        this._breadCrumbSvc.setBreadCrumb('Project Dashboard');
        this._breadCrumbSvc.setHyperLink(false);
    }
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Dashboard Component');
        this._svc.getProjectList().subscribe(function (res) {
            _this.rowData = res.project;
        });
    };
    DashboardComponent.prototype.search = function (event) {
        this.filterText = event.target.value;
        console.log(this.filterText);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ts-dashboard',
            templateUrl: 'dashboard-component.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.BreadcrumbService, dashboard_service_1.DashboardService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
