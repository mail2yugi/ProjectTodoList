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
var core_1 = require('@angular/core');
var project_info_routs_1 = require('./project-info-routs');
var project_info_component_1 = require('./project-info-component');
var project_info_service_1 = require("./project-info-service");
var common_1 = require('@angular/common');
var ProjectInfoModule = (function () {
    function ProjectInfoModule() {
    }
    ProjectInfoModule = __decorate([
        core_1.NgModule({
            imports: [
                project_info_routs_1.routing,
                common_1.CommonModule
            ],
            declarations: [
                project_info_component_1.ProjectInfoComponent
            ],
            exports: [],
            providers: [project_info_service_1.ProjectInfoService],
            entryComponents: []
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectInfoModule);
    return ProjectInfoModule;
}());
exports.ProjectInfoModule = ProjectInfoModule;
