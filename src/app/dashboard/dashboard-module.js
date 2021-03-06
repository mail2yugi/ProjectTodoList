/**
 * Created by yugandhar.ds on 3/21/2017.
 */
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
var dashboard_routs_1 = require('./dashboard-routs');
var dashboard_component_1 = require('./dashboard-component');
var dashboard_service_1 = require('./dashboard-service');
var table_row_1 = require("./project/table-row");
var common_1 = require('@angular/common');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                dashboard_routs_1.routing
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                table_row_1.TableRow,
                dashboard_component_1.todoFilterPipe
            ],
            exports: [table_row_1.TableRow],
            providers: [dashboard_service_1.DashboardService],
            entryComponents: [table_row_1.TableRow]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
