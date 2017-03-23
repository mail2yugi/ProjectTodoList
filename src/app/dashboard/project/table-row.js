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
 * Created by yugandhar.ds on 3/23/2017.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var TableRow = (function () {
    function TableRow(_router) {
        this._router = _router;
    }
    TableRow.prototype.ngOnInit = function () {
        console.log('Table Row');
    };
    TableRow.prototype.navigateToDetails = function (event) {
        this._router.navigate(['/project', event.target.innerHTML]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TableRow.prototype, "project", void 0);
    TableRow = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '[ts-table-row]',
            template: "<td><a (click)=\"navigateToDetails($event)\">{{project.projectId}}</a></td>\n              <td>{{project.projectName}}</td>\n              <td>{{project.projectStatus}}</td>"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TableRow);
    return TableRow;
}());
exports.TableRow = TableRow;
